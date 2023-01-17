<template>
    <div class="Detalle">
        <img class="imgencabezado" src="../assets/detail.png"/>
        <h2>Detalle del Proveedor</h2><br/>
        <span>Proveedor número:</span> {{id}}<br/><br/>
        <span>Nombre:</span> {{proveedores.nombre}}<br/><br/>
        <span>Dirección:</span> {{proveedores.direccion}}<br/><br/>
        <span>RFC:</span> {{proveedores.rfc}}<br/><br/>
        <span>Teléfono:</span> {{proveedores.telefono}}<br/><br/>
        <span>Observaciones:</span> {{proveedores.observaciones}} 
    </div>
</template>

<script>
import {URL_DATOS} from '../utils/constantes'
import axios from "axios"

export default {
    name:"DetalleProveedor",
    components:{},
    props: {
        id: Number,
    },
    data: function(){
        return{
            proveedores: [],
        };
    },
    created() {
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function(){
         let p = []
         await axios.get(URL_DATOS + "/proveedores/" + this.id)
         .then(function(response){
            //console.log(response.data[0]);
            p = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.proveedores = p;
      },
    },
};
</script>