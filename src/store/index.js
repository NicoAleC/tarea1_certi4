import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: [
      'libros',
      'revistas',
      'periodico',
      'otros',
      'todas'
    ],
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
        categoria: 'periodico'
      },
      {
        codigo: 6,
        nombre: 'Periódico 2',
        descripcion: 'descripción 6',
        categoria: 'periodico'
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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
