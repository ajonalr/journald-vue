<template>
  <div class="entry-title d-flex justify-content-between p2">
    <div>
      <span class="text-black fs-3 fw-bold">16</span>
      <span class="mx-1 fs-3 fw-bold">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021 Martes</span>
    </div>

    <div>
      <button class="btn btn-danger m-2">
        Borrar
        <i class="fa fa-trash-alt" aria-hidden="true"></i>
      </button>

      <button class="btn btn-primary m-2">
        Subir Foto
        <i class="fa fa-upload" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="CUENTAME TU DIA"></textarea>
  </div>

  <Fab 
    icon="fa-save"
  />

  <img
    src="https://decodev.net/wp-content/uploads/2021/10/DeCoDev.png"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>

textarea { 
   font-size:20px;
   border: none;
   height: 100%;
   
   &:focus {
      outline: none;
   }
}

img { 
   width: 200px;
   position:fixed;
   bottom: 150px;
   right: 20px;
   box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 1.0);
}
</style>