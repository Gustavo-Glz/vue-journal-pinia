<script setup>
import { defineAsyncComponent } from 'vue'


const Fab = defineAsyncComponent(() => import('../components/Fab.vue'))
</script>

<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">05</span>
      <span class="mx-1 fs-3">Octubre</span>
      <span class="mx-2 fs-4 fw-ligth">2022, Miercoles</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Subir foto 
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <Fab icon="fa-save"/>
  <img class="img-thumbnail" src="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg" alt="entry-picture">
</template>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>