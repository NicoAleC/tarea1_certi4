<template>
  <div class="libreria">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Libreria',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.libreria {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: brown;
}
</style>
