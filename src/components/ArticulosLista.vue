<template>
    <div class="ArticulosLista">
      <!--button @click.prevent="traerArticulos()">Datos</button -->
      <h1>Inventario de artículos registrados en el sistema</h1>
      <br>
      <button @click.prevent="nuevoArticulo()" class="btn btn-success btn-lg btn-new">Nuevo Artículo</button>
      <table class="table table-striped" id="tabla-registros">
         <thead>
            <tr>
               <th>No.</th>
               <th>Descripcion</th>
               <th>Precio</th>
               <th>Cantidad</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="art in articulos" :key="art.id">
               <td>
                  <a href="" @click.prevent="detalleArticulo(art.id)">{{art.id}}</a>
               </td>
               <td>{{art.descripcion}}</td>
               <td>{{art.precio}}</td>
               <td>{{art.cantidad}}</td>
               <td>
                  <button @click.prevent="editarArticulo(art.id)" class="btn btn-primary">Editar</button>
                  <button @click.prevent="eliminarArticulo(art.id)" class="btn btn-danger">Eliminar</button>
               </td>
            </tr>
         </tbody>
      </table>
    </div>
</template>

<style lang="scss">

</style>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";

export default {
    name: "ArticulosLista",
    componentes: {},
     data: function(){
        return {
            articulos: []
        };
     },
     created() {
      this.traerArticulos();
     },
     methods: {
      traerArticulos: async function(){
         let a = []
         await axios.get(URL_DATOS+"/articulos")
         .then(function(response){
            //console.log(response);
            a = response.data;
         })
         .catch(function(error){
            console.log(error);
         });
         this.articulos = a;
      },
      detalleArticulo: function(id){
         this.$router.push({name:"detalle", params: {id : id}});
      },
      editarArticulo: function(id){
         this.$router.push({name:"editar", params: {id : id}});
      },
      eliminarArticulo: async function(id){
         if(confirm("¿Seguro que desea eliminar el articulo con id " + id + "?")) {
            const res = await axios.delete(URL_DATOS + "/articulos/" + id)
            if (typeof res.data.errno != 'undefined') {
               // console.log('ERROR: ' + res.data.sqlMessage);
               alert("ERROR: Este articulo no puede ser eliminado porque hay registros de compra/venta asociados a él.");
            } else {
               alert("El articulo con id " + id + " fue eliminado exitosamente.");
            }
            this.traerArticulos();
         };
      },
      nuevoArticulo: function(){
         this.$router.push({name:"nuevo", params: {}});
      },
     },
}
</script>