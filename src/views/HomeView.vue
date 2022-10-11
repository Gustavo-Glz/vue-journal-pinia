<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToDayBook = () => router.push( { name: 'no-entry'})
</script>

<template>
  <main>
    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
  </main>
</template>
