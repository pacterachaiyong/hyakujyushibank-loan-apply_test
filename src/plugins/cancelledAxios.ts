import axios from 'axios'
import router from '@/router'
import { Notification } from 'element-ui'
import { get } from 'lodash'
import { IAxiosInstance } from './index.d'

// 取消请求的axios类
const { CancelToken } = axios
let axiosCancel: any = null //定义存放当前取消的请求方法
let notify: any = null // 单一错误通知，避免多次通知登录失败

/**
 * 创建 axios 实例
 */
export const _axios = axios.create({
  timeout: 3000
})

/**
 * 请求 拦截器
 */
_axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('Authorization')}`

    if (typeof axiosCancel === 'function') {
      //在请求发出前取消上一次未完成的请求
      axiosCancel(`${config.url}`) //取消请求
    }
    config.cancelToken = new CancelToken(cancel => {
      axiosCancel = cancel
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 返回 拦截器
 */
_axios.interceptors.response.use(
  response => {
    //重置取消请求状态
    axiosCancel = null

    const { data } = response
    //判断是是否存在message
    if (data) {
      const { message, msg } = data
      data.message = data.message ? message : msg
    }
    //判断是否登录有效
    if (response.status == 200 && data.success) {
      return data
    } else if (data.status === 403 || ['token 已过期！', 'token 已过期！', 'token 非法无效！'].includes(data.message)) {
      notify && notify.close()
      notify = Notification.error(`登录已失效! ${data.message} 请重新登录`)
      sessionStorage.clear()
      sessionStorage.setItem('Authorization', '')

      setTimeout(() => {
        router.push({
          name: 'login',
          query: {
            logout: null
          }
        })
      }, 1000)

      return Promise.reject(data)
    } else {
      Notification.error(`请求错误:${data.message}`)
      return Promise.reject(data)
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('取消请求：', error.message) //请求如果被取消，这里是返回取消的message
    } else {
      return Promise.reject(error)
    }
  }
)
;(_axios as IAxiosInstance).get = (url, params = {}) => {
  let config = {
    method: 'get',
    url,
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return _axios(config).catch(error => {
    return Promise.reject(error)
  })
}
//=======================添加upload方法===================
;(_axios as IAxiosInstance).upload = (url, params = {}, onUploadProgress = null) => {
  let config = {
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: onUploadProgress
  }
  return _axios(config).catch(error => {
    return Promise.reject(error)
  })
}

//===================添加delPost方法=========================
;(_axios as IAxiosInstance).delPost = (url, params = {}) => {
  let config = {
    method: 'delete',
    url,
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return _axios(config).catch(error => {
    return Promise.reject(error)
  })
}
