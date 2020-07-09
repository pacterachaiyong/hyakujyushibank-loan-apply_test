<template>
    <div class="container">
        <el-row id="title" class="title">
            <div>{{ this.applyPageTitle }}</div>
        </el-row>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-reviewOptionsNewCardLoan label-font-css">お借入限度額</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-reviewOptionsNewCardLoan last-input">
                        <el-select
                            ref="limitMoney"
                            v-model="limitMoney"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in moneyOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            > </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style" />

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-reviewOptionsNewCardLoan label-font-css">貸越利率</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-reviewOptionsNewCardLoan last-input">
                        <span>年4～12％</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style" />

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-reviewOptionsNewCardLoan label-font-css">期間</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-reviewOptionsNewCardLoan last-input">
                        <span>3年（自動更新）</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style" />

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-reviewOptionsNewCardLoan label-font-css">ダイレクトメール</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-reviewOptionsNewCardLoan last-input">
                        <el-checkbox
                            v-model="dairekutoMail"
                            true-label="0"
                            false-label="1"
                        ><span style="color: black">金融商品等のダイレクトメール等は希望しません。</span></el-checkbox>
                    </div>
                </el-col>
            </el-row>

        </div>

        <el-row style="margin-top: 20px; color: #6e6e6e;">
            <div style="float: left">※</div><div style="display: flex">銀行の「個人情報の取扱いに関する同意書」の利用目的に記載されている「ダイレクトメール等による金融商品等のご案内」を希望されない場合は、上記にチェックしてください。</div>
        </el-row>


        <div style="margin-top: 40px;margin-bottom: 80px;">
            <el-row>
                <el-col :xs="24" :sm="24"><el-button
                    type="danger"
                    class="nextBtn-reviewOptionsNewCardLoan"
                    @click="nextBtn()"
                >入力画面へ</el-button></el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';
import inputCheck from '@/libs/inputCheck';
import message from '@/libs/message';
import constants from '@/libs/constants';

@Component
export default class Error extends Vue {
  applyPageTitle:string=this.$store.state.loanStore.applyPageTitle
  moneyOptions: any = constants.limitMoneyList

  limitMoney: string = '0'
  dairekutoMail: string = this.$store.state.loanStore.dairekutoMail

  mounted() {
    this.init()

    let title:any = document.getElementById("app")
    title.scrollIntoView();
  }
  init() {
    if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck) {
      this.$router.push('/errorPage')
    }
  }

  nextBtn() {

    if (inputCheck.checkNull(this.limitMoney)) {
      this.$message.error(message.limitMoney01);
      let limitMoney: any = this.$refs.limitMoney
      limitMoney.focus()
      return;
    }

    this.$store.commit('loanStore/setLimitMoney', this.limitMoney);
    this.$store.commit('loanStore/setDairekutoMail', this.dairekutoMail);
    this.$store.commit('loanStore/setFlg01BeforePage', true);
    this.$router.push('/newCardLoan01')
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .title {
      padding: 10px 0px 10px 20px;
      margin-top: 20px;
      font-size: 18px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-right: 0.5px solid rgb(230,230,230);
    }
    .label-birthday-reviewOptionsNewCardLoan {
      margin-top: 15px;
      margin-left: 20px;
    }
    .sub-label-birthday-input-reviewOptionsNewCardLoan {
      padding-top: 5px;
      padding-left: 30px;
    }
    .sub-label-birthday-reviewOptionsNewCardLoan {
      padding-top: 15px;
      padding-left: 30px;
    }
    .backBtn-reviewOptionsNewCardLoan {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .nextBtn-reviewOptionsNewCardLoan {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }
  }
  @media screen and (max-width: 767px) {
    .title {
      padding: 10px 0px 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      //font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-bottom: 0.5px solid rgb(230,230,230);
    }
    .label-birthday-reviewOptionsNewCardLoan {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-input-reviewOptionsNewCardLoan {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-birthday-reviewOptionsNewCardLoan {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .nextBtn-reviewOptionsNewCardLoan {
      width: 100%;
      background: #fc0019;
      float: right;
      height: 50px;
    }
    .last-input {
      margin-bottom: 20px;
    }
  }
</style>
