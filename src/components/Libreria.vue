<template>
  <div  class="libreria">
      <h1>{{ msg }}</h1>
      <input v-model="filtro" placeholder="Nombre del libro" />
      <br/>
      <select v-model="categoria">
        <option :key="cat" v-for="cat in categorias">{{ cat }}</option>
      </select>
      <table>
        <thead>
          <tr>
            <th :key="columna" v-for="columna in this.cabeceras">{{ columna }}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.codigo" v-for="item in filtrados">
            <td>{{ item.codigo }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
            <td>{{ item.categoria }}</td>
          </tr>
        </tbody>
      </table>
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
    },
    cabeceras () {
      return this.$store.state.productos_
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

table, th, td {
  border: 1px solid black;
}

table {
  margin: auto;
  width: 50%;
  padding: 10px;
}

td {
  color: black;
}

</style>
