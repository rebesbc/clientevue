<template>
    <div class="Nuevo">
        <h2>Datos del Nuevo Artículo</h2>
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

        <button @click.prevent="nuevo()" class="btn btn-primary btn-lg">Agregar artículo</button>
    </div>
</template>

<script>
import { URL_DATOS } from '../utils/constantes.js'
import axios from 'axios'

export default{
    name: "Nuevo",
    components: {},
    data: function(){
        return{
            articulos: [],
        };
    },
    methods: {
        nuevo: async function(){
            // console.log(this.articulos.descripcion);
            const res = await axios.post(URL_DATOS + '/articulos/', {
                descripcion: this.articulos.descripcion,
                precio: this.articulos.precio,
                cantidad: this.articulos.cantidad
            });
            console.log(res);
        }
    },
};
</script>