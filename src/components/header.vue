<template>
    <header>
        <h1><router-link to="/">{{ logo }}</router-link></h1>
        <ul>
            <li><router-link to="/">TODOS</router-link></li>
            <li><router-link to="/2">ABOUT</router-link></li>
            <li><router-link to="/3">consept</router-link></li>
        </ul>
    </header>
</template>

<style>
  header {
    width: 100%;
    padding: 20px 5%;
    background: #333;
  }
  header h1 {
    font-weight: normal;
  }
  header a {
    text-decoration: none;
    color: #fff;
  }
  header h1 a {
    color: #ddd;

  }
  header ul {
    padding: 20px 0 0;
    display: flex;
    justify-content: space-around;
  }
  header ul a {
    font-weight: bold;
  }
</style>

<script>
export default {
  data () {
    return {
      logo: 'VueのTODO'
    }
  }
}
</script>
