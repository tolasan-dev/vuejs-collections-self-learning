# vue-lifecycle-hook concept process 

```<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

onBeforeMount(() => console.log("Actor behind curtain"))
onMounted(() => console.log("Actor on stage"))
onBeforeUpdate(() => console.log("Director updates script"))
onUpdated(() => console.log("Actor performs new line"))
onBeforeUnmount(() => console.log("Actor prepares to exit"))
onUnmounted(() => console.log("Actor exits stage"))
</script>
