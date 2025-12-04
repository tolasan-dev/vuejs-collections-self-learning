<template>
  <div class="card">
    <h2>Add Task</h2>

    <label>Title</label>
    <input v-model="title" type="text" />

    <label>Due Date</label>
    <input v-model="dueDate" type="date" />

    <label>Priority</label>
    <select v-model="priority">
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select>

    <div class="btns">
      <button @click="save" class="btn btn-success">Save</button>
      <button @click="$emit('close')" class="btn btn-danger">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      dueDate: "",
      priority: "medium",
    };
  },
  methods: {
    save() {
      if (!this.title.trim()) return;

      this.$emit("save-task", {
        title: this.title,
        dueDate: this.dueDate,
        priority: this.priority,
      });

      this.title = "";
      this.dueDate = "";
      this.priority = "medium";
    },
  },
};
</script>

<style>
input,
select {
  width: 100%;
  margin-bottom: 10px;
  padding: 6px;
}
.btns {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
