<template>
    <div class="Detalle">
        Artículo número: {{ id }}
        <br>
        Descripción: {{ articulos.descripcion }}
        <br>
        Cantidad: {{ articulos.cantidad }}
        <br>
        Precio: {{ articulos.precio }}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { URL_DATOS } from '../utils/constantes.js'
import axios from 'axios'

export default {
    name: "Detalle",
    components: {},
    props: {
        id: Number,
    },
    data: function () {
        return{
            articulos: [],
        };
    },
    created(){ // método que se ejecuta cuando el html se carga
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function(){
            let a = [];
            await axios.get(URL_DATOS + "/articulos/" + this.id)
            .then(function (response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error){
                console.log(error);
            });
            this.articulos = a;
        }
    },
    
}
</script>