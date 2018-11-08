<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  .main-box {
    max-width: 1120px;
    min-height: 700px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px 30px;
    margin: 50px auto 0;
  }
  .main-box h2 {
    text-align: center;
  }
</style>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  el: '#app',
  components: {
    'my-header': Header,
    'my-footer': Footer
  }
}
</script>
