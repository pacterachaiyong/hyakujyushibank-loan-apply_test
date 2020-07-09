<template>
    <div class="container">
        <el-row id="title" class="title">
            <div>{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="@/assets/imgs/page05/pc_loan_05.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="@/assets/imgs/page05/m_loan_05.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <div style="height: 700px; margin-top: 30px; padding-top: 10px; border-radius: 10px; text-align: center;" class="label-background-color isPc">
            <el-row style="margin-top: 50px;">
                <el-col :xs="1" :sm="1">&nbsp;</el-col>
                <el-col :xs="23" :sm="23">
                    <h1>お申込みありがとうございました！</h1>
                    <img src="@/assets/imgs/thanks.png" alt="" />
                </el-col>
            </el-row>
        </div>

        <div style="height: 380px; margin-top: 30px; border-radius: 10px; text-align: center;" class="label-background-color isMobile">
            <el-row style="margin-top: 50px;">
                <el-col :xs="1" :sm="1">&nbsp;</el-col>
                <el-col :xs="23" :sm="23">
                    <h2>お申込みありがとうございました！</h2>
                    <img src="@/assets/imgs/thanks-mobile.png" alt="" />
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 30px;  border-radius: 10px;" class="label-background-color content-height">
            <el-row style="margin-top: 50px;">
                <el-col :xs="1" :sm="1">&nbsp;</el-col>
                <el-col :xs="23" :sm="23">
                    <h3>今後の手続きついて</h3>
                    <div>受付後、お申込内容確認のためお電話をさせていただきます。</div>
                    <div style="margin-top: 10px;">審査は、その後となりますので、あらかじめご了承ください。</div>
                    <div style="margin-top: 20px;" class="red-color">
                        ※　平日16時以降および土・日・祝日（12月31日～1月3日を含む）のお申込みについては、
                    </div>
                    <div class="red-color content-detail">お電話させていただくのが翌営業日以降になります。</div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 30px;  border-radius: 10px; " class="label-background-color content-height2">
            <el-row style="margin-top: 50px;">
                <el-col :xs="1" :sm="1">&nbsp;</el-col>
                <el-col :xs="23" :sm="23">
                    <h3>審査結果のご連絡</h3>
                    <div>審査の結果を、担当者から直接お客様にご通知します。</div>
                    <div style="margin-top: 20px;">※　ご契約の際の必要書類等のご案内もさせていただきます。</div>
                    <div class="content-detail">（当行にお口座をお待ちでない方はご契約時にお口座を作成いただきます）</div>
                    <div class="content-detail">また、ご契約手続きまでに別途書類をご提出いただく場合があります。</div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 50px;margin-bottom: 30px;">
            <el-row style="text-align: center">
                <a href="https://www.114bank.co.jp"><el-button
                    style="width: 250px;background: #e70311"
                    type="danger"
                    class="btnHeight"
                >ホームへ戻る</el-button></a>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';
@Component
export default class Error extends Vue {
  applyPageTitle:string=this.$store.state.loanStore.applyPageTitle
  mounted() {

    // let title:any = document.getElementById("app")
    // title.scrollIntoView();
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
    .label-know3 {
        margin-top: 40px;
        margin-left: 50px;
    }
    .content-detail {
        margin-left: 28px;
        margin-top: 10px;
    }
    .content-height {
        height: 200px;
    }
    .content-height2 {
        height: 200px;
    }
    .btnHeight {
      height: 50px;
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
    .label-know3 {
        margin-top: 20px;
        text-align: center;
    }
    .content-detail {
        margin-left: 0px;
    }
    .content-height {
        height: 270px;
    }
    .content-height2 {
        height: 250px;
    }
}
</style>
