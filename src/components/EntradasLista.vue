<template>
    <div class="EntradasLista">
        <h1>Historial de entradas</h1>
        <br>
        <button @click.prevent="nuevaEntrada()" class="btn btn-success btn-lg btn-new">Nueva Entrada</button>
        <table class="table table-striped" id="tabla-registros">
         <thead>
            <tr>
               <th>Folio</th>
               <th>Articulo</th>
               <th>Cantidad</th>
               <th>Costo</th>
               <th>Proveedor</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="ent in entradas" :key="ent.folio">
                <td>
                    {{ent.folio}}
                </td>
                <td>
                    <a href="" @click.prevent="detalleArticulo(ent.articulo_id)">{{ent.articulo_id}}</a>
                </td>
                <td>{{ent.cantidad}}</td>
                <td>{{ent.costo_unidad}}</td>
                <td>
                    <a href="" @click.prevent="detalleProveedor(ent.proveedor_id)">{{ent.proveedor_id}}</a>
                </td>
                <td><button @click.prevent="eliminarEntrada(ent.folio)" class="btn btn-danger">Eliminar</button></td>
            </tr>
         </tbody>
      </table>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";

export default {
    name: "EntradasLista",
    componentes: {},
    data: function(){
        return {
            entradas: [],
            articulos: [],
        };
    },
    created() {
        this.traerEntradas();
    },
    methods: {
        traerEntradas: async function(){
            let e = []
            await axios.get(URL_DATOS+"/entradas")
            .then(function(response){
                console.log(response);
                e = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
         this.entradas = e;
        },
        traerDetalleEntrada: async function(folio){
         let e = []
         await axios.get(URL_DATOS + "/entradas/" + folio)
         .then(function(response){
            //console.log(response.data[0]);
            e = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.entradas = e;
      },
      traerDetalleArticulos: async function () {
      let a = [];
      await axios
        .get(URL_DATOS + "/articulos/" + this.entradas.articulo_id)
        .then(function (response) {
          console.log(response.data[0]);
          a = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
      this.articulos = a;
    },
      actualizarArticulos: async function(){
        console.log(this.articulos.cantidad);
        console.log(this.entradas.cantidad);
        const res = await axios.put(URL_DATOS + "/articulos/" + this.articulos.id,{
            descripcion: this.articulos.descripcion,
            precio: this.articulos.precio,
            cantidad: parseInt(this.articulos.cantidad) - parseInt(this.entradas.cantidad),
        });
        //console.log(res);
      },
        eliminarEntrada: async function(folio){
            if(confirm("Se eliminará la entrada " + folio)){
                await this.traerDetalleEntrada(folio);
                const res = await axios.delete(URL_DATOS + "/entradas/" + folio);
                await this.traerDetalleArticulos();
                await this.actualizarArticulos();
                await this.traerEntradas();
            }
            //console.log(res);
        },
        nuevaEntrada: function(){
            this.$router.push({name:"nuevaEntrada", params: {}});
        },
        detalleArticulo: function(id){
            this.$router.push({name:"detalle", params: {id : id}});
        },
        detalleProveedor: function(id){
         this.$router.push({name:"detalleProveedor", params: {id : id}});
        },
    },
}
</script>