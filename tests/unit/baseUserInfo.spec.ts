// import { mount, createLocalVue } from '@vue/test-utils'
// import ElementUI from 'element-ui'
// import BaseUserInfo from '@/components/BaseUserInfo/BaseUserInfo.vue'
// import Form from '@/components/BaseUserInfo/Form.vue'
// import MainTop from '@/components/BaseUserInfo/MainTop.vue'
// import MenuTree from '@/components/BaseUserInfo/MenuTree.vue'
// import PersonImg from '@/components/BaseUserInfo/PersonImg.vue'
//
// const localVue = createLocalVue()
// localVue.use(ElementUI)
//
// // describe('Form.vue', () => {
// //   it('Form 单元测试', () => {
// //     const propsData = {
// //       id: '1',
// //       nextApi: () => new Promise(reslove => {})
// //     }
// //     const wrapper = mount(Form, {
// //       localVue,
// //       propsData
// //     })
// //     const formCreate = wrapper.find('.formCreate .el-form-item')
// //     // const formItem = wrapper.find('')
// //     expect(formCreate).toBe(true)
// //   })
// // })
//
// describe('MenuTree', () => {
//   const propsData = {
//     menuData: [
//       {
//         name: '基本信息',
//         routerName: 'personAddBaseInfo',
//         componentName: 'v-base-info'
//       }
//     ],
//     nextApi: () => new Promise(resolve => {})
//   }
//   const wrapper = mount(MenuTree, {
//     localVue
//   })
//   it('MenuTree 单元测试', () => {
//     const label = wrapper.find('.info-left-bottom')
//     expect(label.contains('ul')).toBe(true)
//   })
// })
