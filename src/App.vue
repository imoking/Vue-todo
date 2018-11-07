<template>
  <div id="app">
    <router-view/>
    <p>
      <input type="text"
    placeholder="TODOを入力しましょう！"
    v-model="newItemTitle"
    v-on:keyup.enter="addTodo(newItemTitle)">
    </p>
    <ul>
      <li v-for="item in items" :key="item">
        <label v-bind:class="{ done: item.isChecked }">
          <input type="checkbox" v-model="item.isChecked"> {{ item.title }}
        </label>
      </li>
    </ul>
    <button v-on:click="deleteTodo()">チェック済みの項目を削除する</button>
  </div>
</template>

<style>
  .done { text-decoration: line-through; }
  #app {
    width: 600px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin: 50px auto 0;
  }
</style>

<script>

export default {
  data () {
    return {
      msg: 'Hello World!',
      message: 'Hellor Vue.js!',
      isChecked: true,
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false }
      ],
      newItemTitle: ''
    }
  },
  methods: {
    addTodo: function (newTitle) {
      this.items.push({
        title: newTitle,
        isChecked: false
      })
      this.newItemTitle = ''
      this.saveTodo()
    },
    saveTodo: function () {
      localStorage.setItem('items', JSON.stringify(this.items))
    },
    deleteTodo: function () {
      this.items = this.items.filter(function (item) {
        return item.isChecked === false
      })
      this.saveTodo()
    },
    loadTodo: function () {
      this.items = JSON.parse(localStorage.getItem('items'))
      if (!this.items) {
        this.items = []
      }
    }
  },
  mounted: function () {
    this.loadTodo()
  }
}
</script>
