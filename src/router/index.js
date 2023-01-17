import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Articulos from  '../views/Articulos.vue'
import Detalle from '../components/Detalle.vue'
import Editar from '../components/Editar.vue'
import Nuevo from '../components/Nuevo.vue'

import Proveedores from  '../views/Proveedores.vue'
import NuevoProveedor from '../components/NuevoProveedor.vue'
import EditarProveedor from '../components/EditarProveedor.vue'
import DetalleProveedor from '../components/DetalleProveedor.vue'

import Clientes from '../views/Clientes.vue'
import NuevoCliente from '../components/NuevoCliente.vue'
import EditarCliente from '../components/EditarCliente.vue'
import DetalleCliente from '../components/DetalleCliente.vue'

import Entradas from '../views/Entradas.vue'
import NuevaEntrada from '../components/NuevaEntrada.vue'

import Salidas from '../views/Salidas.vue'
import NuevaSalida from '../components/NuevaSalida.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articulos',
    name: 'articulos',
    component: Articulos
  },
  {
    path:'/detalle',
    name: 'detalle',
    component: Detalle,
    props: true,
  },
  {
    path:'/editar',
    name: 'editar',
    component: Editar,
    props: true,
  },
  {
    path:'/nuevo',
    name: 'nuevo',
    component: Nuevo,
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path:'/detallecliente',
    name: 'detallecliente',
    component: DetalleCliente,
    props: true,
  },
  {
    path:'/editarcliente',
    name: 'editarcliente',
    component: EditarCliente,
    props: true,
  },
  {
    path:'/nuevocliente',
    name: 'nuevocliente',
    component: NuevoCliente,
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores
  },
  {
    path:'/detalleProveedor',
    name: 'detalleProveedor',
    component: DetalleProveedor,
    props: true,
  },
  {
    path: '/nuevoProveedor',
    name: 'nuevoProveedor',
    component: NuevoProveedor
  },
  {
    path:'/editarProveedor',
    name: 'editarProveedor',
    component: EditarProveedor,
    props: true,
  },
  {
    path: '/entradas',
    name: 'entradas',
    component: Entradas
  },
  {
    path: '/nuevaEntrada',
    name: 'nuevaEntrada',
    component: NuevaEntrada
  },
  {
    path: '/salidas',
    name: 'salidas',
    component: Salidas
  },
  {
    path: '/nuevaSalida',
    name: 'nuevaSalida',
    component: NuevaSalida
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
