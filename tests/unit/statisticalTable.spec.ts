// import { mount, createLocalVue } from '@vue/test-utils'
// import ElementUI from 'element-ui'
// import StatisticalTable from '@/components/StatisticalTable'
//
// const localVue = createLocalVue()
// localVue.use(ElementUI)
//
// describe('StatisticalTable.vue', () => {
//     it('StatisticalTable 单元测试', () => {
//         const propsData = {
//             tableData: [
//                 {
//                     date: "2016-05-02",
//                     old: "王小虎",
//                     new: "王大虎",
//                     address: "上海市普陀区金沙江路 1518 弄",
//                     children: [
//                         {
//                             date: "2016-05-03",
//                             old: "王小虎1",
//                             new: "王大虎1",
//                             address: "上海市普陀区金沙江路 1518 弄",
//                         }
//                     ]
//                 }
//             ],
//             columns: [
//                 {
//                     prop: "date",
//                     label: "日期"
//                 },
//                 {
//                     prop: "name",
//                     label: "姓名",
//                     children: [
//                         {
//                             prop: "old",
//                             label: "曾用名"
//                         },
//                         {
//                             prop: "new",
//                             label: "现用名"
//                         }
//                     ]
//                 },
//                 {
//                     prop: "address",
//                     label: "地址"
//                 }
//             ],
//             nextApi: () => new Promise(reslove => { })
//         }
//         const wrapper = mount(StatisticalTable, {
//             localVue,
//             propsData
//         })
//         const label = wrapper.find('.table-box')
//         expect(label.contains('table')).toBe(true)
//     })
// })
