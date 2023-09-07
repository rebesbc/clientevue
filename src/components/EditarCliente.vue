<template>
    <div class="EditarCliente">
        <img class="imgencabezado" src="../assets/editcustomer.png"/>
        <h2>Datos del Cliente</h2>
        <label for="txtnombre">Nombre del cliente:</label>
        <input type="text" name="txtnombre" id="txtnombre" v-model="clientes.nombre" class="form-control">
        <label for="txtdireccion">Direccion del cliente:</label>
        <input type="text" name="txtdireccion" id="txtdireccion" v-model="clientes.direccion" class="form-control">
        <label for="txtrfc">RFC del cliente:</label>
        <input type="text" name="txtrfc" id="txtrfc" v-model="clientes.rfc" class="form-control">
        <button @click.prevent="actualizarCliente()" class="btn btn-primary btn-lg btn-save">Actualizar Cliente</button>
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
        actualizarCliente: async function() {
            this.clientes.nombre = this.clientes.nombre.trim();
            this.clientes.direccion = this.clientes.direccion.trim();
            this.clientes.rfc = this.clientes.rfc.trim();
            if (this.clientes.nombre != null && this.clientes.direccion != null && this.clientes.rfc != null
            && this.clientes.nombre != "" && this.clientes.direccion != "" && this.clientes.rfc != "") {
                const res = await axios.put(URL_DATOS + "/clientes/" + this.id, {
                    nombre: this.clientes.nombre,
                    direccion: this.clientes.direccion,
                    rfc: this.clientes.rfc,
                });
                console.log(res);
                alert("Se han guardado los cambios al cliente " + this.id);
                this.$router.push({name:"clientes", params: {}});
            } else {
                alert("Verifique que ningún campo esté vacío!");
            }
        },
    },
};
</script>