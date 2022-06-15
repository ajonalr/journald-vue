<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p2">
      <div>
        <span class="text-black fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3 fw-bold">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>

      <div>
        <input
          type="file"
          @change="onselectImage"
          ref="imageSelector"
          v-show="false"
          accept="image/*"
        />

        <button
          class="btn btn-danger m-2"
          v-if="entry.id"
          @click="onDeleteEntry"
        >
          Borrar
          <i class="fa fa-trash-alt" aria-hidden="true"></i>
        </button>

        <button class="btn btn-warning m-2" @click="cancelImg">
          Cancelar Foto
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <button class="btn btn-primary m-2" @click="onSelectedImage">
          Subir Foto
          <i class="fa fa-upload" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="CUENTAME TU DIA" v-model="entry.text"></textarea>
    </div>
  </template>

  <Fab icon="fa-save" @on:click="saveEntry" />

  <img
    v-if="entry.picture && !localImg"
    :src="entry.picture"
    alt="Ari Dev"
    class="img-thumbnail"
  />

  <img
    v-if="localImg"
    :src="localImg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import getDateMonthYear from "../helpers/getDateMonthYear";
import uploadImage from "../helpers/uploadimage.js";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  data() {
    return {
      entry: null,
      localImg: null,
      file: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesById"]),
    day() {
      const { day } = getDateMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDateMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDateMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["undateEntry", "createEntry", "deleteEntry"]),
    loadEntry() {
      let entry;

      if (this.id == "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntriesById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "ESPERA POR FAVOR",
        allowOutsideClick: false,
      });

      Swal.showLoading();

      const picture = await uploadImage(this.file);

      this.entry.picture = picture;
      if (this.entry.id) {
        // va actulizar una entrada
        await this.undateEntry(this.entry);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "ENTRADA ACTULIZADA CON EXITO",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // va a guardar una entrada
        const id = await this.createEntry(this.entry);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "ENTRADA REGISTRADA CON EXITO",
          showConfirmButton: false,
          timer: 1500,
        });
        return this.$router.push({ name: "entry", params: { id } });
      }
      this.cancelImg();

    },
    async onDeleteEntry() {
      Swal.fire({
        title: "ELIMINAR",
        text: "ESTA SEGURO DE ELIMINAR",
        showDenyButton: true,
        confirmButtonText: "SI, ESTOY SEGURO!",
        denyButtonText: `NO, CANCELAR`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteEntry(this.entry.id);
          this.$router.push({ name: "no-entry" });
          Swal.fire("ENTRADA ELIMINADA!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("ENTRADA NO ELIMINADA", "", "info");
        }
      });
    },
    onselectImage(e) {
      const file = e.target.files[0];

      if (!file) {
        this.file = null;
        this.localImg = null;
        return;
      }

      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.localImg = fr.result);
      fr.readAsDataURL(file);
    },
    cancelImg() {
      this.localImg = null;
      this.file = null;
    },
    onSelectedImage() {
      this.$refs.imageSelector.click();
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

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
  box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 1);
}
</style>