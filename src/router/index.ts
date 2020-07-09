import Vue from 'vue'
import Router from 'vue-router'
import loan114 from '@/router/loan114'

// import * as storeInit from '@/store';
// const store = storeInit.initVueXStore(Vue);

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/views/home/Index.vue'),
            redirect: '/examinationLoan',
            children: [...loan114]
        }
        // ...loan114,
        // {
        //   path: '/login',
        //   name: 'Login',
        //   component: () => import('@/views/system/Login.vue')
        // },
        // {
        //   path: '/logout',
        //   name: 'Logout',
        //   component: () => import('@/views/system/Logout.vue')
        // },
        // {
        //   path: '/error/:id',
        //   name: 'Error',
        //   component: () => import('@/views/common/Error.vue')
        // }
    ]
})

// リフレッシュ状態フラグ
let refreshFlag = true

let sendFlag = false

// ウェブサイトの進むと戻るイベント
window.onpopstate = () => {
  if (sendFlag) {
    history.forward()
  }
}

router.beforeEach((to, from, next) => {
  // URLを変更して、画面をリフレッシュしない、onpopstateイベントを実行する
  if (to.path === '/newCardLoan05' || to.path === '/otherLoan05') {
    const path = location.href.split('#')
    // @ts-ignore
    history.pushState(null, null, path[0] + '#' + to.path)
    if (refreshFlag) {
      refreshFlag = false
      history.back()
    }
    sendFlag = true
  } else {
    sendFlag = false
    if (refreshFlag) {
      refreshFlag = false
    }
  }
  next()
  // const path = location.href.split('#')
  // history.pushState(null, null, path[0] + '#' + to.path)
  // if (refreshFlag) {
  //   refreshFlag = false
  //   // @ts-ignore
  //   next(to)
  //   history.back()
  // }
    // if (to.path === '/login' || to.path === '/logout' || to.path.indexOf('/error') > -1) {
    //   next()
    // } else {
    //   if (!sessionStorage.getItem('Authorization')) {
    //     router.push('/login')
    //   } else {
    //     next()
    //   }
    // }

    // if (window.location.search) {
    //   const loanType = window.location.search.split('=')[1]
    //   store.commit('loanStore/setLoanType', decodeURI(loanType));
    //   window.location.search = '';
    // }

})
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
