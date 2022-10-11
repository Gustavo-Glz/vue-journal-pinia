<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'

const NavBar = defineAsyncComponent(() => import('../components/NavBar.vue'))
const EntryList = defineAsyncComponent(() => import('../components/EntryList.vue'))
</script>

<template>
  <NavBar />
  <section class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <RouterView />
    </div>
  </section>
</template>
