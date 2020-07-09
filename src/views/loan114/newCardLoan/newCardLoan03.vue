<template>
    <div v-loading="loading" class="container">
        <el-row id="title" class="title">
            <div>{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="../../../assets/imgs/page03/pc_loan_03.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="../../../assets/imgs/page03/m_loan_03.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; color: #6e6e6e;" class="label-font-css">
            <div>■ご資金計画についてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-new-card-loan03 label-font-css">ご利用目的<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-new-card-loan03 last-input">
                        <el-select
                            ref="purposeFlg"
                            v-model="purposeFlg"
                            placeholder="選択してください"
                            @change="purposeFlgChange"
                        >
                            <el-option
                                v-for="item in usePurposeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>

                        <el-input
                            v-show="purposeFlg === '10'"
                            ref="otherPurpose"
                            v-model.trim="otherPurpose"
                            maxlength="20"
                            class="sub-label-birthday-input-detail-new-card-loan03"
                            style="width: 60%;"
                            placeholder="入力してください"
                            @blur="purposeBlur"
                        ></el-input>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-loan-new-card-loan03 label-font-css">無担保ローンのお借入<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div id="getFlg" class="sub-label-loan-radio-new-card-loan03">
                        <el-radio-group v-model="getFlg" @change="clearGetFlag">
                            <el-radio label="A"><span class="radio-font-size">借入なし</span></el-radio>
                            <el-radio label="B"><span class="radio-font-size">借入あり</span></el-radio>
                        </el-radio-group>
                    </div>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="sub-label-loan-input-new-card-loan03"
                        >
                            <el-input
                                ref="getCount"
                                v-model.trim="getCount"
                                maxlength="5"
                                placeholder="（例）3"
                                class="new-card-loan03-input-width"
                                :disabled="getFlg!=='B'"
                                @input="onInputEvent('getCount')"
                            ></el-input>
                            <span style="margin-left: 10px;" class="sub-label-font-css">件</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="sub-label-loan-input-new-card-loan03 last-input"
                        >
                            <el-input
                                ref="getMoney"
                                v-model.trim="getMoney"
                                maxlength="4"
                                placeholder="（例）150"
                                class="new-card-loan03-input-width"
                                :disabled="getFlg!=='B'"
                                @input="onInputEvent('getMoney')"
                            ></el-input>
                            <span style="margin-left: 10px;" class="sub-label-font-css">万円</span>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-new-card-loan03 label-font-css">お取引希望店<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            class="sub-label-birthday-input-new-card-loan03"
                            :xs="24"
                            :sm="10"
                        >
                            <el-select
                                ref="hopeStoreName"
                                v-model="hopeStoreName"
                                placeholder="（例）高松支店"
                                style="width: calc(100%);"
                            >
                                <el-option-group
                                    v-for="group in hopeStoreNameOption"
                                    :key="group.label"
                                    :label="group.label"
                                >
                                    <el-option
                                        v-for="item in group.options"
                                        :key="item.label"
                                        :label="item.label"
                                        :value="item.label"
                                    ></el-option>
                                </el-option-group>
                            </el-select>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <el-row style="margin-top: 20px; color: #6e6e6e;" class="label-font-css">
            <div>■現在のお取引状況についてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px"
                >
                    <div class="label-birthday-new-card-loan03 label-font-css">当行とのお取引</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-shop-radio-new-card-loan03">
                        <el-radio-group v-model="bankAccount">
                            <el-radio label="1"><span class="radio-font-size">あり</span></el-radio>
                            <el-radio label="0"><span class="radio-font-size">なし</span></el-radio>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 40px;margin-bottom: 80px;">
            <el-row>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="backBtn-new-card-loan03"
                        @click="backBtn()"
                    >戻る
                    </el-button>
                </el-col>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="nextBtn-new-card-loan03"
                        @click="nextBtn()"
                    >次へ
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';
import utils from '@/libs/utils';
import inputCheck from '@/libs/inputCheck';
import message from '@/libs/message02';
import constants from '@/libs/constants';

import {apply114LoanGetHopeStoreName, apply114LoanGetDetail, apply114LoanTmp} from '@/api/loan114';

  @Component
export default class Error extends Vue {
    applyPageTitle:string=this.$store.state.loanStore.applyPageTitle
    loading: boolean = false
    purposeFlg: string = ''
    otherPurpose: string = ''

    getFlg: string = ''
    getCount: string = ''
    getMoney: string = ''
    hopeStoreName: string = ''
    hopeStoreFlg: string = ''
    bankAccount: string = ''

    usePurposeOptions: any = constants.purposeFlgList
    hopeStoreNameOption: any = []

    tmpHopeStoreNameOption: any = []

    mounted() {
      this.init()

      let title: any = document.getElementById("app")
      title.scrollIntoView();

      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01
        && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
        // 向后台发送请求渲染页面 this.$store.state.loanStore.docId
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        apply114LoanGetDetail(params).then(res => {
          const data = res.data.resultData
          this.purposeFlg = data.purposeFlg
          this.otherPurpose = data.otherPurpose

          this.getFlg = data.getFlg
          this.getCount = data.getCount
          this.getMoney = data.getMoney
          this.hopeStoreName = data.hopeStoreNmae
          this.hopeStoreFlg = data.hopeStoreFlg
          this.bankAccount = data.bankAccount
          this.loading = false

        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      } else {
        this.loading = false
      }
    }

    onInputEvent(eventName, strFlag) {
      if(strFlag){
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      }else{
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
      }
    }

    init() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02) {
        this.$router.push('/errorPage')
      }

      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }

      let params: any = {
        'postCode': "newloan"
      }
      this.loading = true
      apply114LoanGetHopeStoreName(params).then(res => {

        let resHopeStoreNameOptionList: any[] = [];
        let tmp_list_item: any[] = [];
        res.data.resultData.storeList.forEach((val) => {
          let list_item: any[] = []
          val['storeVos'].forEach((item) => {
            let detail_dict: any = {}
            detail_dict.label = item.storeName
            detail_dict.value = item.storeNumber
            list_item.push(detail_dict)
            tmp_list_item.push(detail_dict)
          });
          resHopeStoreNameOptionList.push({'label': val.arealistnname, 'options': list_item})

        });
        this.tmpHopeStoreNameOption = tmp_list_item;
        this.hopeStoreNameOption = resHopeStoreNameOptionList
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })

    }

    purposeBlur() {
      this.otherPurpose = utils.changeToDBC(this.otherPurpose)
    }

    nextBtn() {

      for (let item of this.tmpHopeStoreNameOption) {
        if (item.label == this.hopeStoreName) {
          this.hopeStoreFlg = item.value
        }
      }
        // ご利用目的_目的（空チェック）
      if (inputCheck.checkNull(this.purposeFlg)) {
        this.$message.error(message.purposeFlg01);
        let purposeFlg: any = this.$refs.purposeFlg
        purposeFlg.focus()
        return;

        // ご利用目的_目的が「その他」の場合、ご利用目的_その他ご利用目的（空チェック）
      } else if (this.purposeFlg == '10' && inputCheck.checkNull(this.otherPurpose)) {
        this.$message.error(message.purpose01);
        let purpose: any = this.$refs.purpose
        purpose.focus()
        return

        // ご利用目的_目的が「その他」の場合、ご利用目的_その他ご利用目的（全角チェック（漢字））
      } else if (this.purposeFlg == '10' && inputCheck.zenkakuCheck(this.otherPurpose)) {
        this.$message.error(message.purpose02);
        let purpose: any = this.$refs.purpose
        purpose.focus()
        return;

        // 無担保ローンのお借入（空チェック）
      } else if (inputCheck.checkNull(this.getFlg)) {
        this.$message.error(message.getFlg01);
        let getFlg: any = document.getElementById("getFlg")
        getFlg.scrollIntoView();
        return;

        // 無担保ローンのお借入が「借入あり」の場合、無担保ローンのお借入_件数（空チェック）
      } else if (this.getFlg == 'B' && inputCheck.checkNull(this.getCount)) {
        this.$message.error(message.getCount01);
        let getCount: any = this.$refs.getCount
        getCount.focus()
        return

        // 無担保ローンのお借入が「借入あり」の場合、無担保ローンのお借入_金額（空チェック）
      } else if (this.getFlg == 'B' && inputCheck.checkNull(this.getMoney)) {
        this.$message.error(message.getMoney01);
        let getMoney: any = this.$refs.getMoney
        getMoney.focus()
        return

        // お取引希望店（空チェック）
      } else if (inputCheck.checkNull(this.hopeStoreName)) {
        this.$message.error(message.hopeStoreName01);
        let hopeStoreName: any = this.$refs.hopeStoreName
        hopeStoreName.focus()
        return
      }

      let params: any = {
        'flag': '3',
        'loanType': '0',
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'purposeFlg': this.purposeFlg,
        'otherPurpose': this.otherPurpose,
        'getFlg': this.getFlg,
        'getCount': this.getCount,
        'getMoney': this.getMoney,
        'hopeStoreNmae': this.hopeStoreName,
        'hopeStoreFlg': this.hopeStoreFlg,
        'bankAccount': this.bankAccount
      }

      this.loading = true
      apply114LoanTmp(params).then(() => {
        this.$store.commit('loanStore/setFlg03', true);

        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/newCardLoan04');
        }
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    backBtn() {
      this.$router.push('/newCardLoan02')
    }
    clearGetFlag(){
      this.getCount = "";
      this.getMoney = "";
    }
    purposeFlgChange(){
      this.otherPurpose = '';
    }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .title {
      padding: 10px 0 10px 20px;
      margin-top: 20px;
      font-size: 18px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-right: 0.5px solid rgb(230, 230, 230);
    }
    .label-birthday-new-card-loan03 {
      margin-top: 15px;
      margin-left: 20px;
    }
    .sub-label-birthday-input-new-card-loan03 {
      padding-top: 5px;
      padding-left: 30px;
    }
    .label-loan-new-card-loan03 {
      margin-top: 40px;
      margin-left: 20px;
    }
    .sub-label-loan-radio-new-card-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-loan-input-new-card-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .new-card-loan03-input-width {
      width: 80%;
    }
    .sub-label-shop-radio-new-card-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }
    .backBtn-new-card-loan03 {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .nextBtn-new-card-loan03 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }
    .sub-label-birthday-input-detail-new-card-loan03 {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .title {
      padding: 10px 0 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      //font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .last-input {
      margin-bottom: 20px;
    }
    .label-birthday-new-card-loan03 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-input-new-card-loan03 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .label-loan-new-card-loan03 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-loan-radio-new-card-loan03 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-loan-input-new-card-loan03 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .new-card-loan03-input-width {
      width: 80%;
    }
    .sub-label-shop-radio-new-card-loan03 {
      padding-top: 20px;
      padding-left: 30px;
      padding-bottom: 20px;
    }
    .backBtn-new-card-loan03 {
      width: 130px;
      background: #fc0019;
    }
    .nextBtn-new-card-loan03 {
      width: 130px;
      background: #fc0019;
      float: right;
    }
    .sub-label-birthday-input-detail-new-card-loan03 {
      margin-top: 8px;
    }
  }
</style>
