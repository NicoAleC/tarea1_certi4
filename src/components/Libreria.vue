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
      categoria: '',
      productos: [
        {
          codigo: 1,
          nombre: 'libro 1',
          descripcion: 'descripción 1',
          categoria: 'libros'
        },
        {
          codigo: 2,
          nombre: 'libro 2',
          descripcion: 'descripción 2',
          categoria: 'libros'
        },
        {
          codigo: 3,
          nombre: 'revista 1',
          descripcion: 'descripción 3',
          categoria: 'revistas'
        },
        {
          codigo: 4,
          nombre: 'Revista 2',
          descripcion: 'descripción 4',
          categoria: 'revistas'
        },
        {
          codigo: 5,
          nombre: 'Periódico 1',
          descripcion: 'descripción 5',
          categoria: 'periódicos'
        },
        {
          codigo: 6,
          nombre: 'Periódico 2',
          descripcion: 'descripción 6',
          categoria: 'periódicos'
        },
        {
          codigo: 7,
          nombre: 'Comic 1',
          descripcion: 'descripción 7',
          categoria: 'otros'
        },
        {
          codigo: 8,
          nombre: 'Comic 2',
          descripcion: 'descripción 8',
          categoria: 'otros'
        }
      ],
      categorias: [
        'libros',
        'revistas',
        'periódico',
        'otros',
        'todas'
      ]
    }
  },
  computed: {
    filtrados () {
      if (this.categoria === 'todas') {
        return this.productos
      } else {
        return this.productos.filter(item => item.categoria === this.categoria)
      }
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
