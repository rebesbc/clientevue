<template>
    <div class="Editar">
        <h2>Datos del Artículo</h2>
        <br/>
        <!-- class="form-control" es una clase de estilos de Vue-->
        <label for="txtdescripcion">Descripción</label>
        <input type="text" 
        name="txtdescripcion" 
        id="txtdescripcion" 
        v-model="articulos.descripcion" 
        class="form-control"
        />
        <br/>
        <label for="txtcantidad">Precio</label>
        <input type="text" 
        name="txtprecio" 
        id="txtprecio" 
        v-model="articulos.precio" 
        class="form-control"
        />
        <br/>
        <label for="txtcantidad">Cantidad</label>
        <input type="text" 
        name="txtcantidad" 
        id="txtcantidad" 
        v-model="articulos.cantidad" 
        class="form-control"
        />

        <button @click.prevent="actualizar()" class="btn btn-primary btn-lg">Actualizar artículo</button>
        <!-- class="btn btn-primary btn-lg" es una clase de estilos de bootstrap -->
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
        },
        actualizar: async function(){
            // console.log(this.articulos.descripcion);
            const res = await axios.put(URL_DATOS + '/articulos/' + this.id, {
                descripcion: this.articulos.descripcion,
                precio: this.articulos.precio,
                cantidad: this.articulos.cantidad
            });
            console.log(res);
        },
    },
    
}
</script>