<template>
  <div class="container mt-5">
    <div>
      <h1>To-do list</h1>

      <button class="add-btn" @click="showModal = true">+ Add Task</button>

      <TaskList :tasks="tasks" @toggle-complete="toggleComplete" />

      <TaskModal v-if="showModal" @close="showModal = false">
        <TaskInput @save-task="addTask" @close="showModal = false" />
      </TaskModal>
    </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import TaskModal from "./components/TaskModal.vue";
import TaskInput from "./components/TaskInput.vue";

export default {
  components: { TaskList, TaskModal, TaskInput },
  data() {
    return {
      showModal: false,
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        ...task,
        completed: false,
      });
      this.showModal = false;
    },
    toggleComplete(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
  },
};
</script>

<style>
body {
  background: radial-gradient(circle at top, #adc1b8, #ffffff);
  height: 100vh;
}
/* .container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: sans-serif;
} */

.add-btn {
  background: #10b169;
  color: rgb(44, 43, 43);
  border: none;
  padding: 8px 15px;
  border-radius: 24px;
  cursor: pointer;
}
</style>
