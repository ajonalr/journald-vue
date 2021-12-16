<template>
  <div class="entry-lit-container">
    <div class="p-2">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="BUSCAR ENTRADA" v-model="term" />
      </div>
    </div>

    <div class="my-2 d-flex felx-column">
      <button type="button" class="btn btn-primary mx-3"
      @click="$router.push({ name: 'entry', params: { id: 'new'}})"
      ><i class="fa fa-plus-circle" aria-hidden="true"></i> NUEVA ENTRADA</button>
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry='entry' >Entry{{ item }}</Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex'
export default {

  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  computed : {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term)
    }
  },
  data () {
    return  {
      term: ''
    }
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

