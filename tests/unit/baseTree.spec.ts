// import { mount, createLocalVue } from '@vue/test-utils'
// import ElementUI from 'element-ui'
// import BaseTree from '@/components/OrgTree/BaseTree.vue'
//
// const localVue = createLocalVue()
// localVue.use(ElementUI)
//
// describe('BaseTree.vue', () => {
//   it('BaseTree 单元测试', () => {
//     const propsData = {
//       rootOrg: [
//         {
//           id: '00001',
//           leixing: 'dw',
//           quancheng: '中国铁建'
//         }
//       ],
//       nextApi: () => new Promise(reslove => {})
//     }
//     const wrapper = mount(BaseTree, {
//       localVue,
//       propsData
//     })
//
//     const label = wrapper.find('.custom-tree-node .label').text()
//     expect(label).toBe('中国铁建')
//   })
// })
