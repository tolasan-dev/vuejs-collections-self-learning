<template>
  <div>
    <TaskItem
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @toggle-complete="$emit('toggle-complete', index)"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  props: ["tasks"],
  components: { TaskItem },
};
</script>
