<template>
    <div class="Detalle">
        <img class="imgencabezado" src="../assets/detail.png"/>
        <h2>Detalle del Cliente</h2><br/>
        <span>Cliente número:</span> {{id}}<br/><br/>
        <span>Nombre:</span> {{clientes.nombre}}<br/><br/>
        <span>Dirección:</span> {{clientes.direccion}}<br/><br/>
        <span>RFC:</span> {{ clientes.rfc }}
    </div>
</template>

<script>
import { URL_DATOS } from '../utils/constantes.js'
import axios from 'axios';

export default{
    name:"DetalleCliente",
    components:{},
    props: {
        id: Number,
    },
    data: function() {
        return {
            clientes: [],
        };
    },
    created() {
        this.traeDetalleCliente();
    },
    methods: {
        traeDetalleCliente: async function() {
            let a = [];
            await axios.get(URL_DATOS + "/clientes/" + this.id)
            .then(function(response){
                console.log(response.data[0]);
                a = response.data[0];
            })
            .catch(function(error) {
                console.log(error);
            });
            this.clientes = a;
        },
    },
};
</script>