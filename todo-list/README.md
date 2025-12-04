 ## parent app.vue 

 ```<div id="app">
  <h2>Vue.js To-Do List</h2>

  <input v-model="newTodo" placeholder="Enter a task..." />
  <button @click="addTodo">Add</button>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.done">
      <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
        {{ todo.text }}
      </span>
      <button @click="removeTodo(index)">X</button>
    </li>
  </ul>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") return;

      this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount("#app");
</script>





```todo-app/
src/
│── App.vue
│── main.js
│
└── components/
    │── TodoInput.vue
    │── TodoList.vue
    └── TodoItem.vue

Data flow 

```App.vue
  ├── holds the todos data
  ├── passes list to TodoList.vue
  └── listens for child events (add, delete, toggle)

TodoInput.vue
  └── emits "add" event → App.vue adds todo

TodoList.vue
  └── loops list and passes item to TodoItem.vue

TodoItem.vue
  └── emits "delete" or "toggle" event → App.vue updates data


