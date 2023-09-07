<template>
    <div class="ClientesLista">
        <h1>Clientes registrados en el sistema</h1>
        <br>
        <button @click.prevent="nuevoCliente()" class="btn btn-success btn-lg btn-new">Nuevo Cliente</button>
        <table class="table table-striped" id="tabla-registros">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nombre</th>
                    <th>Direcci&oacute;n</th>
                    <th>RFC</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cli in clientes" :key="cli.id">
                    <td> 
                        <a href="" @click.prevent="detalleCliente(cli.id)">{{ cli.id }}</a> 
                    </td>
                    <td> {{cli.nombre}} </td>
                    <td> {{cli.direccion}} </td>
                    <td> {{cli.rfc}} </td>
                    <td>
                        <button @click.prevent="editarCliente(cli.id)" class="btn btn-primary">Editar</button>
                        <button @click.prevent="eliminarCliente(cli.id)" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
    td {
        vertical-align: middle;
    }
    td button.btn-primary {
        margin-right: 10px;
    }
</style>

<script>
import { URL_DATOS } from '../utils/constantes.js';
import axios from 'axios';

export default {
    name: "ClientesLista",
    components: {},
    data: function() {
        return {
            clientes: []
        };
    },
    created() {
        this.traeClientes();
    },
    methods: {
        traeClientes: async function() {
            let a = [];
            await axios.get(URL_DATOS + "/clientes")
            .then(function(response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
            this.clientes = a;
        },
        detalleCliente: function(id){
            this.$router.push({name:"detallecliente", params: {id:id}});
        },
        editarCliente: function(id){
            this.$router.push({name:"editarcliente", params: {id:id}});
        },
        eliminarCliente: async function(id){
            if(confirm("¿Seguro que desea eliminar el cliente con id " + id + "?")) {
                const res = await axios.delete(URL_DATOS + "/clientes/" + id);
                if (typeof res.data.errno != 'undefined') {
                    alert("ERROR: Este cliente no puede ser eliminado porque hay registros de compra/venta asociados a él.");
                } else {
                    alert("El cliente con id " + id + " fue eliminado exitosamente.");
                }
                this.traeClientes();
                // console.log(res);
            };
        },
        nuevoCliente: function() {
            this.$router.push({name:"nuevocliente", params: {}});
        },
    },
}
</script>