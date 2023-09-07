<template>
    <div class="ProveedoresLista">
        <h1>Proveedores registrados en el sistema</h1>
        <br>
        <button @click.prevent="nuevoProveedor()" class="btn btn-success btn-lg btn-new">Nuevo Proveedor</button>
        <table class="table table-striped" id="tabla-registros">
         <thead>
            <tr>
               <th>No.</th>
               <th>Nombre</th>
               <th>Direccion</th>
               <th>RFC</th>
               <th>Telefono</th>
               <th>Observaciones</th>
               <th>Acciones</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="prov in proveedores" :key="prov.id">
               <td>
                  <a href="" @click.prevent="detalleProveedor(prov.id)">{{prov.id}}</a>
               </td>
               <td>{{prov.nombre}}</td>
               <td>{{prov.direccion}}</td>
               <td>{{prov.rfc}}</td>
               <td>{{prov.telefono}}</td>
               <td>{{prov.observaciones}}</td>
               <td>
                  <button @click.prevent="editarProveedor(prov.id)" class="btn btn-primary">Editar</button>
                  <button @click.prevent="eliminarProveedor(prov.id)" class="btn btn-danger">Eliminar</button>
               </td>
            </tr>
         </tbody>
      </table>
    </div>
</template>

<script>
import {URL_DATOS} from "../utils/constantes.js";
import axios from "axios";

export default {
    name: "ProveedoresLista",
    componentes: {},
    data: function(){
        return {
            proveedores: []
        };
    },
    created() {
        this.traerProveedores();
    },
    methods: {
        traerProveedores: async function(){
         let p = []
         await axios.get(URL_DATOS+"/proveedores")
         .then(function(response){
            console.log(response);
            p = response.data;
         })
         .catch(function(error){
            console.log(error);
         });
         this.proveedores = p;
        },
        detalleProveedor: function(id){
         this.$router.push({name:"detalleProveedor", params: {id : id}});
        },
        editarProveedor: function(id){
            this.$router.push({name:"editarProveedor", params: {id : id}});
        },
        eliminarProveedor: async function(id){
            if(confirm("¿Seguro que desea eliminar el proveedor con id " + id + "?")) {
                const res = await axios.delete(URL_DATOS + "/proveedores/" + id);
                if (typeof res.data.errno != 'undefined') {
                    alert("ERROR: Este proveedor no puede ser eliminado porque hay registros de compra/venta asociados a él.");
                } else {
                    alert("El proveedor con id " + id + " fue eliminado exitosamente.");
                }
                this.traerProveedores();
                //console.log(res);
            };
        },
        nuevoProveedor: function(){
            this.$router.push({name:"nuevoProveedor", params: {}});
        },
    }
}
</script>