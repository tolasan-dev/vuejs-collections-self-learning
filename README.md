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


1. App.vue (main parent — holds all data)

<template>
  <div>
    <h2>Vue Todo Without Store</h2>

    <TodoInput @add-todo="addTodo" />

    <TodoList 
      :todos="todos" 
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: { TodoInput, TodoList },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(text) {
      this.todos.push({ text, done: false })
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
    }
  }
}
</script>


##  2. TodoInput.vue (child — adds todo)

 ```<template>
  <div>
    <input v-model="text" @keyup.enter="submit" placeholder="Add todo" />
    <button @click="submit">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    submit() {
      if (this.text.trim() === '') return
      this.$emit('add-todo', this.text)
      this.text = ''
    }
  }
}
</script>

 ## 🧩 3. TodoList.vue (child — shows list)

 ```<template>
  <ul>
    <TodoItem 
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      @delete-todo="$emit('delete-todo', index)"
      @toggle-todo="$emit('toggle-todo', index)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: ['todos'],
  components: { TodoItem }
}
</script>

 ## 4. TodoItem.vue (child — handles one item)

```<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="$emit('toggle-todo', index)" />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="$emit('delete-todo', index)">X</button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'index']
}
</script>



