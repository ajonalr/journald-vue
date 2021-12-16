<template>
  <Navbar />

  <div class="row justify-content-md-center" v-if="isloading">
    <div class="alert alert-info col-md-4 mt-4" role="alert">
      <strong
        >Espero Porfavor
        <i class="fa fa-spin fa-spinner" aria-hidden="true"></i>
      </strong>
    </div>
  </div>

  <div class="d-flex" v-else>
    <div class="col-4">
      <EntryList />
    </div>

    <div class="col">
      <router-view />
    </div>
  </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },

  computed: {
    ...mapState("journal", ["isloading"]),
  },

  methods: {
    ...mapActions("journal", ["getEntries"]),
  },
  created() {
    this.getEntries();
  },
};
</script>