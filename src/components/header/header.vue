<template>
    <div>
        <div class="container">
            <el-row id="header-img">
                <el-col
                    :xs="24"
                    :sm="4"
                    style="margin-top: 12px;"
                    class="header-img"
                >
                    <img
                        class="isPc"
                        src="@/assets/imgs/logo.png"
                    />
                    <img
                        class="isMobile"
                        src="@/assets/imgs/logo_sp.png"
                    />
                </el-col>
                <el-col
                    :xs="24"
                    :sm="20"
                    style="margin-top: 20px;"
                    class="header"
                >
                    <div class="font-size-logo">金融機関コード:0173</div>
                </el-col>
            </el-row>
        </div>

        <hr class="hr-style" style="margin-top: 15px;margin-bottom: 25px;"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Header extends Vue {}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .font-size-logo {
      font-size: 16px;
      color: #707070;
      margin-top: 45px;
      margin-left: 130px;
    }
    .header-img {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .font-size-logo {
      text-align: center;
      font-size: 12px;
      color: #707070;
    }
    .header-img {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: calc( 50% - 75px );
    }
  }
</style>
