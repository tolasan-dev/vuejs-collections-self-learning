<template>
  <div class="card" :class="{ done: task.completed }">
    <h3>{{ task.title }}</h3>
    <p>Due: {{ task.dueDate }}</p>

    <span class="tag" :class="task.priority">
      {{ task.priority }}
    </span>

    <button class="btn btn-success" @click="$emit('toggle-complete')">
      {{ task.completed ? "Undo" : "Complete" }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
.card {
  background: white;
  border-radius: 12px;
  margin-top: 20px;
  padding: 15px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card.done {
  opacity: 0.5;
  text-decoration: line-through;
}

.tag {
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  border-left: 5px solid #1da000;
  font-size: 12px;
  margin-top: 6px;
  text-transform: capitalize;
}

.low {
  background: #caffc6;
  color: #0b7a00;
}
.medium {
  background: #fff3b0;
  color: #a07c00;
}
.high {
  background: #ffd0d0;
  color: #b10000;
}

.btn-success {
  width: 200px;
  margin-top: 20px;
}
</style>
