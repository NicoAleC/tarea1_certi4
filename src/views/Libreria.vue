<template>
  <div class="libreria">
    <img alt="Libreria logo" src="../assets/interior-libreria.jpg">
    <Lib msg="Esta es la sección de la librería"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Lib from '@/components/Libreria.vue'

export default {
  name: 'Libreria',
  components: {
    Lib
  }
}
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
