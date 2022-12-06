<template>
    <div class="ArticulosLista"> 
        <!-- button @click.prevent="traeArticulos()">Datos</button -->
        <button @click.prevent="nuevoArticulo()" class="btn btn-success btn-lg">Nuevo</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="art in articulos" :key="art.id">
                    <td>
                        <a href="" @click.prevent="detalleArticulo(art.id)">{{ art.id }}</a>
                    </td>
                    <td>{{ art.descripcion }}</td>
                    <td>{{ art.precio }}</td>
                    <td>{{ art.cantidad }}</td>
                    <td>
                        <button @click.prevent="editarArticulo(art.id)">Editar</button>
                        <button @click.prevent="eliminarArticulo(art.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { URL_DATOS } from '../utils/constantes.js'
import axios from 'axios'

export default {
    name: "ArticulosLista",
    components: {},
    data: function(){
        return{
            articulos: []
        }
    },
    created() {
        this.traeArticulos();
    },
    methods: {
        traeArticulos: async function(){
            let a = [];
            await axios.get(URL_DATOS + "/articulos").then(function (response){
                console.log(response);
                a = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
            this.articulos = a;
        },
        detalleArticulo: function(id){
            this.$router.push({name: "detalle", params: { id: id } });
        },
        editarArticulo: function(id){
            this.$router.push({name: "editar", params: { id: id } });
        },
        eliminarArticulo: async function(id){
            const res = await axios.delete(URL_DATOS + '/articulos/' + id);
            this.traeArticulos();
            console.log(res);
        },
        nuevoArticulo: function(){
            this.$router.push({name: "nuevo", params: {} });
        }
    },
};
</script>