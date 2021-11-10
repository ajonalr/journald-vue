<template>
  <div class="entry-contariner mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 20} })">
    <!-- titulo de la entradas -->
    <div clas s="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-4 fw-light">2021, Martes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate
      beatae deserunt illo harum aperiam dolorem doloremque atque dolor
      quibusdam, at architecto fugiat eum sequi fugit fuga voluptatibus pariatur
      rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      sed laboriosam distinctio rerum facilis, iste aliquid amet qui veniam quia
      id placeat. Dolore architecto rerum quibusdam similique autem corporis
      tempora!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-contariner {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
     font-size: 12px;
  }
}
</style>