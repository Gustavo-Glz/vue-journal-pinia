<template>
  <div class="entry-container mb-3 pointer" @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">05</span>
      <span class="mx-1 fs-5">Octubre</span>
      <span class="mx-2 fw-light">2022, Miercoles</span>
    </div>
    <div class="entry-description">
      Magna reprehenderit consectetur sint esse nostrud ipsum enim non ex quis
      Lorem minim exercitation minim.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 35);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
