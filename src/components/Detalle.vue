<template>
    <div class="Detalle">
        <img class="imgencabezado" src="../assets/detail.png"/>
        <h2>Detalle del Artículo</h2><br/>
        <span>Artículo número:</span> {{id}}<br/><br/>
        <span>Descripción:</span> {{articulos.descripcion}}<br/><br/>
        <span>Cantidad:</span> {{articulos.cantidad}} piezas<br/><br/>
        <span>Precio:</span> ${{articulos.precio}} MXN
    </div>
</template>

<script>
import {URL_DATOS} from '../utils/constantes'
import axios from "axios"

export default {
    name:"Detalle",
    components:{},
    props: {
        id: Number,
    },
    data: function(){
        return{
            articulos: [],
        };
    },
    created() {
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function(){
         let a = []
         await axios.get(URL_DATOS + "/articulos/" + this.id)
         .then(function(response){
            //console.log(response.data[0]);
            a = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.articulos = a;
      },
    },
};
</script>