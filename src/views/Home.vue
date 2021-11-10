<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">PRIMARY</button>
    <button @click="goToDayBook" class="btn btn-success">SUCCESS</button>
    <button @click="goToDayBook" class="btn btn-info">INFO</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({name: 'no-entry'})
    },
  },
};
</script>