<script setup>
import { defineAsyncComponent } from 'vue'

const Entry = defineAsyncComponent(() => import('./Entry.vue'))
</script>

<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input class="form-control" type="text" placeholder="Buscar entrada" />
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="entry in 100" :key="entry"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 52px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
