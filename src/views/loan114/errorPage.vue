<template>
    <div class="da-wrapper">
        <div class="da-content">
            <div class="da-container clearfix">
                <div class="da-error-wrapper">
                    <div class="da-error-pin"></div>
                    <div class="da-error-code">
                        <p class="tip">STATUS:500</p>
                        <p class="tip2" style="font-size: 24px;">システムエラーが発生しました。管理者に連絡してください。</p>
                    </div>
                    <h1 class="da-error-heading">すみません, もう一回起動してください!!!</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';

@Component
export default class Error extends Vue {
  mounted() {
    this.init()
  }
  init() {

  }

}
</script>

<style lang="scss">

  div.da-wrapper {
    width: 100%;
    height: auto;
    min-height: 100%;
    position: relative;
    min-width: 320px
  }

  div.da-wrapper .da-container {
    width: 96%;
    margin: auto
  }

  div.da-content {
    clear: both;
    padding-bottom: 58px
  }

  @media only screen and (max-width:480px) {
    div.da-content {
      margin-top: auto
    }
  }

  div.da-error-wrapper {
    width: 320px;
    padding: 30px 0;
    margin: auto;
    position: relative
  }

  div.da-error-wrapper .da-error-heading {
    color: #e15656;
    text-align: center;
    font-size: 24px;
    font-family: Georgia, "Times New Roman", Times, serif
  }

  @-webkit-keyframes error-swing {
    0% {
      -webkit-transform: rotate(1deg)
    }

    100% {
      -webkit-transform: rotate(-2deg)
    }
  }

  @-moz-keyframes error-swing {
    0% {
      -moz-transform: rotate(1deg)
    }

    100% {
      -moz-transform: rotate(-2deg)
    }
  }

  @keyframes error-swing {
    0% {
      transform: rotate(1deg)
    }

    100% {
      transform: rotate(-2deg)
    }
  }

  div.da-error-wrapper .da-error-code {
    width: 285px;
    height: 170px;
    padding: 127px 16px 0 16px;
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    z-index: 5;
    line-height: 1;
    font-size: 32px;
    text-align: center;
    background: url("../../assets/imgs/error-pin.png") no-repeat center center;
    -webkit-transform-origin: center top;
    -moz-transform-origin: center top;
    transform-origin: center top;
    -webkit-animation: error-swing infinite 2s ease-in-out alternate;
    -moz-animation: error-swing infinite 2s ease-in-out alternate;
    animation: error-swing infinite 2s ease-in-out alternate
  }

  div.da-error-wrapper .da-error-code .tip {
    padding-top: 2px;
    color: #e15656;
  }

  div.da-error-wrapper .da-error-code .tip2 {
    padding-top: 15px;
  }

  div.da-error-wrapper .da-error-code .tip3 {
    padding-top: 20px;
    font-size: 16px;
    color: #e15656;
  }

  div.da-error-wrapper .da-error-pin {
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>
