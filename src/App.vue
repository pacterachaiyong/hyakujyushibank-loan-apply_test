<template>
    <div id="app">
        <Header></Header>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/header/header.vue'
@Component({
  components: {
    Header
  }
})
export default class App extends Vue{
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
#app {
  /*min-width: 900px;*/
  height: 100%;
  overflow: hidden;
  /*font-family: 'Microsoft YaHei UI', Helvetica, Arial, sans-serif;*/
  font-family: 'Hiragino Kaku Gothic ProN';
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

