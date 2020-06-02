<template>
  <div  class="libreria">
      <h1>{{ msg }}</h1>
      <input v-model="filtro" placeholder="Nombre del libro" />
      <br/>
      <select v-model="categoria">
        <option :key="cat" v-for="cat in categorias">{{ cat }}</option>
      </select>
      <div v-if="filtrados.length > 0">
        <div :key="item.codigo" v-for="item in filtrados">
            {{ item.codigo }} | {{ item.nombre }} | {{ item.descripcion }} | {{ item.categoria }}
        </div>
      </div>
      <div v-else>
        No existe el item buscado
      </div>
  </div>
</template>

<script>
export default {
  name: 'Libreria',
  props: {
    msg: String
  },
  data () {
    return {
      filtro: '',
      categoria: 'todas'
    }
  },
  computed: {
    filtrados () {
      if (this.categoria === 'todas') {
        if (this.filtro === '') {
          return this.productos
        } else {
          return this.productos.filter(item => item.nombre === this.filtro)
        }
      } else {
        if (this.filtro === '') {
          return this.productos.filter(item => item.categoria === this.categoria)
        } else {
          return this.productos.filter(item => item.categoria === this.categoria && item.nombre === this.filtro)
        }
      }
    },
    categorias () {
      return this.$store.state.categorias
    },
    productos () {
      return this.$store.state.productos
    }
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
