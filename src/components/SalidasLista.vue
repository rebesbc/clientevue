<template>
    <div class="SalidasLista">
        <h1>Historial de salidas</h1>
        <br>
        <button @click.prevent="nuevaSalida()" class="btn btn-success btn-lg btn-new">Nueva Salida</button>
        <table class="table table-striped" id="tabla-registros">
         <thead>
            <tr>
               <th>Folio</th>
               <th>Articulo</th>
               <th>Cantidad</th>
               <th>Costo</th>
               <th>Cliente</th>
               <th>Accion</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="sal in salidas" :key="sal.folio">
                <td>
                  {{sal.folio}}
                </td>
                <td>
                    <a href="" @click.prevent="detalleArticulo(sal.articulo_id)">{{sal.articulo_id}}</a>
                </td>
                <td>{{sal.cantidad}}</td>
                <td>{{sal.costo_unidad}}</td>
                <td>
                    <a href="" @click.prevent="detalleCliente(sal.cliente_id)">{{sal.cliente_id}}</a>
                </td>
                <td><button @click.prevent="eliminarSalida(sal.folio)" class="btn btn-danger">Eliminar</button></td>
            </tr>
         </tbody>
      </table>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";

export default {
    name: "SalidasLista",
    componentes: {},
    data: function(){
        return {
            salidas: [],
            articulos: [],
        };
    },
    created() {
        this.traerSalidas();
    },
    methods: {
        traerSalidas: async function(){
            let s = []
            await axios.get(URL_DATOS+"/salidas")
            .then(function(response){
                //console.log(response);
                s = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
         this.salidas = s;
        },
        traerDetalleSalida: async function(folio){
         let s = []
         await axios.get(URL_DATOS + "/salidas/" + folio)
         .then(function(response){
            //console.log(response.data[0]);
            s = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.salidas = s;
      },
      traerDetalle: async function () {
      let a = [];
      await axios
        .get(URL_DATOS + "/articulos/" + this.salidas.articulo_id)
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
        console.log(this.salidas.cantidad);
        const res = await axios.put(URL_DATOS + "/articulos/" + this.articulos.id,{
            descripcion: this.articulos.descripcion,
            precio: this.articulos.precio,
            cantidad: parseInt(this.articulos.cantidad) + parseInt(this.salidas.cantidad),
        });
        //console.log(res);
      },
        eliminarSalida: async function(folio){
            if(confirm("Se eliminará la salida " + folio)){
                await this.traerDetalleSalida(folio);
                const res = await axios.delete(URL_DATOS + "/salidas/" + folio);
                await this.traerDetalle();
                await this.actualizarArticulos();
                await this.traerSalidas();
                console.log(res);
            };
        },
        nuevaSalida: function(){
            this.$router.push({name:"nuevaSalida", params: {}});
        },
        detalleArticulo: function(id){
            this.$router.push({name:"detalle", params: {id : id}});
        },
        detalleCliente: function(id){
            this.$router.push({name:"detallecliente", params: {id:id}});
        },
    },
}
</script>