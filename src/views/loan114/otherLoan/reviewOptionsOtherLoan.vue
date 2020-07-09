<template>
    <div class="container">
        <el-row id="title" class="title">
            <div>{{this.applyPageTitle}}</div>
        </el-row>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-reviewOptionsOtherLoan label-font-css">ダイレクトメール</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-reviewOptionsOtherLoan last-input">
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
                    class="nextBtn-reviewOptionsOtherLoan"
                    @click="nextBtn()"
                >入力画面へ</el-button></el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';

@Component
export default class Error extends Vue {
  applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    dairekutoMail: string = "1"

    mounted() {
      this.init()

      if (this.$store.state.loanStore.loanAppSeq != "") {
        this.dairekutoMail = this.$store.state.loanStore.dairekutoMail;
      }
      let title:any = document.getElementById("app")
      title.scrollIntoView();
      // this.bankAccount = Base64.decode(this.$store.state.loanStore.bankAccount)
    }

    public get loanType(): string {
      return this.$store.state.loanStore.loanType;
    }

    init() {
      if (!(this.loanType == 'マイカーローン' || this.loanType == '教育ローン' || this.loanType == 'フリーローン' ||
        this.loanType == '徳島文理大学提携教育ローン' || this.loanType == '四国学院大学提携教育ローン' || this.loanType == '穴吹学園提携教育ローン'
        || this.loanType == '禅林学園提携教育ローン' || this.loanType == '中国学園提携教育ローン' || this.loanType == '高松大学・高松短期大学提携教育ローン' ||
        this.loanType == '香川大学提携教育ローン' || this.loanType == '四国医療専門学校提携教育ローン' || this.loanType == '岡山商科大学提携教育ローン'
        || this.loanType == '香川短期大学提携教育ローン')) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.agreeCheck) {
        this.$router.push('/errorPage')
      }
      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }

    nextBtn() {
      this.$store.commit('loanStore/setDairekutoMail', this.dairekutoMail);
      this.$store.commit('loanStore/setFlg01BeforePage', true);
      this.$router.push('/otherLoan01')
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
    .label-birthday-reviewOptionsOtherLoan {
      margin-top: 15px;
      margin-left: 20px;
    }
    .sub-label-birthday-input-reviewOptionsOtherLoan {
      padding-top: 5px;
      padding-left: 30px;
    }
    .sub-label-birthday-reviewOptionsOtherLoan {
      padding-top: 15px;
      padding-left: 30px;
    }
    .backBtn-reviewOptionsOtherLoan {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .nextBtn-reviewOptionsOtherLoan {
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
    .label-birthday-reviewOptionsOtherLoan {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-input-reviewOptionsOtherLoan {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-birthday-reviewOptionsOtherLoan {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .nextBtn-reviewOptionsOtherLoan {
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
