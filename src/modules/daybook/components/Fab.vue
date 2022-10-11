<script setup>
defineProps({
  icon: {
    type: String,
    default: 'fa-plus'
  }
})
</script>

<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 15px;
  height: 60px;
  position: fixed;
  right: 15px;
  width: 60px;
}
</style>