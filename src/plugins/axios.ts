import Vue, { PluginObject } from 'vue'
import router from '@/router'
import axios from 'axios'
import { Notification } from 'element-ui'
import { IAxiosInstance } from './index'
import { get } from 'lodash'

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
// @ts-ignore: Unreachable code error
export const _axios: IAxiosInstance = axios.create(config)
// @ts-ignore: Unreachable code error
export const _axios_download: IAxiosInstance = axios.create(config)

_axios.interceptors.request.use(
  cfg => {
    // cfg.headers['Authorization'] = `Bearer ${sessionStorage.getItem('Authorization')}`
    cfg.headers['authKey1'] = `Bearer anonymity`
    cfg.headers['authKey2'] = `8511`
    cfg.headers['authKey3'] = `1a22d995b49e6af8646e1da8b3e17286e1362066`
    return cfg
  },
  err => {
    return Promise.reject(err)
  }
)

_axios_download.interceptors.request.use(
  cfg => {
    cfg.headers['Authorization'] = `Bearer ${sessionStorage.getItem('Authorization')}`
    return cfg
  },
  err => {
    return Promise.reject(err)
  }
)

/**
 * 解析下载的文件，可能为后端返回的报错信息
 * @param data 下载的数据blob
 */
function checkDownload(data) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = (evt: any) => {
      try {
        let jsonFile = JSON.parse(evt.target.result)
        const loginSuccess: boolean = get(jsonFile, 'data.loginSuccess', true)
        if (jsonFile.status === 403 || ['token 已过期！', 'token 非法无效！'].includes(jsonFile.message) || !loginSuccess) {
          // 登录存在问题
          reject(jsonFile.message)
        } else {
          resolve(true)
        }
      } catch (error) {
        // json解析失败，为其他格式文件，下载
        console.log('非json文件，提示下载')
        resolve(true)
      }
    }
    reader.readAsText(data)
  })
}

let notify: any = null // 单一错误通知，避免多次通知登录失败
_axios_download.interceptors.response.use(
  async response => {
    const { data } = response
    let valid = await checkDownload(data).catch(err => {
      notify && notify.close()
      notify = Notification.error(`登录已失效! ${err} 请重新登录`)
      sessionStorage.clear()
      sessionStorage.setItem('Authorization', '')

      setTimeout(() => {
        router.push({
          name: 'Login',
          query: {
            logout: null
          }
        })
      }, 1000)
    })
    if (valid) {
      if (response.status >= 200 && response.status < 300) {
        // let browser = parser.getBrowser()
        // let { name = '' } = browser ? browser : {}
        if (navigator.msSaveOrOpenBlob) {
          let blob = new Blob([data])
          let parse = decodeURIComponent(response.headers['filename']) // 解码中文
          navigator.msSaveOrOpenBlob(blob, parse)
        } else {
          // 非ie
          let blob = new Blob([data])
          let downloadElement = document.createElement('a')
          let href = window.URL.createObjectURL(blob) //创建下载的链接
          downloadElement.href = href
          let parse = decodeURIComponent(response.headers['filename']) // 解码中文
          downloadElement.download = parse //下载后文件名
          document.body.appendChild(downloadElement)
          downloadElement.click() //点击下载
          document.body.removeChild(downloadElement) //下载完成移除元素
          window.URL.revokeObjectURL(href) //释放掉blob对象
        }
        return response.data
      } else {
        // Notification.error(`请求错误:${response.status}`)
        return Promise.reject(response)
      }
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    // Notification.error(`请求错误:${error}`)
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  res => {
    // const { data } = res
    //     // if (data) {
    //     //   const { message, msg } = data
    //     //   data.message = data.message ? message : msg
    //     // }
    //     // if (res.status == 200 && data.success) {
    //     //   return data
    //     // } else if (data.status === 403 || ['token 已过期！', 'token 已过期！', 'token 非法无效！'].includes(data.message)) {
    //     //   console.log('data: ', data)
    //     //
    //     //   notify && notify.close()
    //     //   notify = Notification.error(`登录已失效! ${data.message} 请重新登录`)
    //     //   sessionStorage.clear()
    //     //   sessionStorage.setItem('Authorization', '')
    //     //
    //     //   setTimeout(() => {
    //     //     router.push({
    //     //       name: 'Login',
    //     //       query: {
    //     //         logout: null
    //     //       }
    //     //     })
    //     //   }, 1000)

      return Promise.resolve(res)
    // } else {
    //   // Notification.error(`请求错误:${data.message}`)
    //   return Promise.reject(data)
    // }
  },
  err => {
    // Notification.error(`请求失败: ${err}`)
    return Promise.reject(err)
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
    timeout: 24 * 60 * 60 * 1000, // 1d
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

//===================添加文件下载Get方法=========================
;(_axios_download as IAxiosInstance).getDownload = (url, params = {}) => {
  let config = {
    method: 'get',
    url,
    params: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    responseType: 'blob'
  }
  return _axios_download(config).catch(error => {
    return Promise.reject(error)
  })
}
//===================添加文件下载Post方法=========================
;(_axios_download as IAxiosInstance).postDownload = (url, params = {}) => {
  let config = {
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    responseType: 'blob'
  }
  return _axios_download(config).catch(error => {
    return Promise.reject(error)
  })
}

const Plugin: PluginObject<any> = {
  install: Vue => {
    Vue.$http = _axios
    Vue.$http_download = _axios_download
  }
}
Plugin.install = Vue => {
  Vue.$http = _axios
  Vue.$http_download = _axios_download
  window.http = _axios
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return _axios
      }
    },
    $http_download: {
      get() {
        return _axios_download
      }
    }
  })
}

Vue.use(Plugin)
export default Plugin
