<template>
  <div class="entry-lit-container">
    <div class="p-2">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="BUSCAR ENTRADA" />
      </div>
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="item in 100" :key="item">Entry{{ item }}</Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {

  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  }

};
</script>

<style lang="scss" scoped>
.entry-lit-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>

