<template>
  <div class="main-box todos">
    <h2>TASK</h2>
    <p class="input-box">
      <input type="text"
    placeholder="TODOを入力しましょう！"
    v-model="newItemTitle"
    v-on:keyup.enter="addTodo(newItemTitle)"><br>
    enter key で確定
    </p>
    <ul>
      <li v-for="item in items" :key="item">
        <label v-bind:class="{ done: item.isChecked }">
          <input type="checkbox" v-model="item.isChecked"> {{ item.title }}
        </label><br>
        <span class="time">投稿時間:{{ item.date }}</span>
      </li>
    </ul>
    <button v-on:click="deleteTodo()">チェック済みの項目を削除する</button>
  </div>
</template>

<style>
  .done { text-decoration: line-through; }
  .todos .input-box {
    margin-bottom: 20px;
  }
  .todos .input-box input[type=text] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .todos ul li {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
  }
  .time {
    text-decoration: none;
  }
  .todos button {
    padding: 15px;
    background: #000;
    border: none;
    border-radius: 5px;
    color: #ddd;
    cursor: pointer;
    margin: 15px auto;
    display: block;
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
        { title: '領収書を準備する', isChecked: true, date: '' },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true, date: '' },
        { title: '参加者の人数を確認する', isChecked: false, date: '' },
        { title: 'ピザを注文する', isChecked: false, date: '' },
        { title: '参加費のお釣りを準備する', isChecked: false, date: '' },
        { title: '会場設営をする', isChecked: false, date: '' }
      ],
      newItemTitle: ''
    }
  },
  methods: {
    addTodo: function (newTitle) {
      const daytime = new Date()
      const fulltime =
      `${daytime.getFullYear()}` + '/' + `${daytime.getMonth() + 1}` + '/' +
      `${daytime.getDate()}` + ' ' + `${daytime.getHours()}` + '時' + `${daytime.getMinutes()}` + '分'
      this.items.push({
        title: newTitle,
        isChecked: false,
        date: fulltime
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
