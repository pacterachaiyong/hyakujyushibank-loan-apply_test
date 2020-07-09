import { Module } from 'vuex';

export const loanStore: Module<any, any> = {
    namespaced: true,
    state: {
        flg01BeforePage: false,
        // 页面是否填写
        flg01: false,
        flg02: false,
        flg03: false,
        // 贷款类型 0：ニューカードローン、1：マイカーローン、2：教育ローン、3：フリーローン 4：**提携教育ローン
        loanType: '',
        // 是否email联系
        dairekutoMail: '1',
        // 存储doc主键
        loanAppSeq: '',
        // 协议是否同意
        agreeCheck: false,
        // 贷款额度
        limitMoney: '',
      //商品名
      trade:'',
      applyPageTitle:''

    },
    getters: {},
    mutations: {
        setFlg01(state, flg01) {
            state.flg01 = flg01;
        },
        setFlg02(state, flg02) {
            state.flg02 = flg02;
        },
        setFlg03(state, flg03) {
            state.flg03 = flg03;
        },
        setLoanType(state, loanType) {
            state.loanType = loanType;
        },
        setDairekutoMail(state, dairekutoMail) {
            state.dairekutoMail = dairekutoMail;
        },
        setLoanAppSeq(state, loanAppSeq) {
            state.loanAppSeq = loanAppSeq;
        },
        setAgreeCheck(state, agreeCheck) {
            state.agreeCheck = agreeCheck;
        },
        setLimitMoney(state, limitMoney) {
            state.limitMoney = limitMoney;
        },
        setFlg01BeforePage(state, flg01BeforePage) {
            state.flg01BeforePage = flg01BeforePage;
        },
      setTrade(state, trade) {
        state.trade = trade;
      },
      setApplyPageTitle(state, applyPageTitle) {
        state.applyPageTitle = applyPageTitle;
      },
        resetData(state) {
            state.flg01 = false;
            state.flg02 = false;
            state.flg03 = false;
            state.loanType = '';
            state.dairekutoMail = '1';
            state.loanAppSeq = '';
            state.agreeCheck = false;
            state.limitMoney = '';
            state.flg01BeforePage = false;
            state.trade = '';
            state.applyPageTitle = '';
        }
    }
};
