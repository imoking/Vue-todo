<template>
  <footer>
    <h3>{{ fLogo }}</h3>
    <p class="copy">copy rights.</p>
  </footer>
</template>

<style>
  footer {
    background: #333;
    padding: 30px 5%;
    margin-top: 50px;
  }
  footer h3 {
    color: #ddd;
    font-size: 120%;
    margin-bottom: 20px;
  }
  .copy {
    text-align: center;
    color: #ddd;
    font-size: 90%;
  }
</style>

<script>
export default {
  data () {
    return {
      fLogo: 'VueのTODO'
    }
  }
}
</script>
