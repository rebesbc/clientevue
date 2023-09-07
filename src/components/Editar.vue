<template>
    <div class="Editar">
        <img class="imgencabezado" src="../assets/checklist.png"/>
        <h2>Datos del Artículo</h2> 
        <label for="txtdescripcion">Descripcion</label>
        <input 
            type="text" 
            name="txtdescripcion" 
            id="txtdescripcion" 
            v-model="articulos.descripcion"
            class="form-control"
        />
        <label for="txtprecio">Precio</label>
        <input 
            type="number" 
            name="txtprecio" 
            id="txtprecio" 
            v-model="articulos.precio"
            class="form-control"
            min="1"
        />
        <label for="txtcantidad">Cantidad</label>
        <input 
            type="number" 
            name="txtcantidad" 
            id="txtcantidad" 
            v-model="articulos.cantidad"
            class="form-control"
            readonly
            disabled
        />
        <button @click.prevent="actualizar()" class="btn btn-primary btn-lg btn-save">
            Actualizar Artículo
        </button>
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
      actualizar: async function(){
        this.articulos.descripcion = this.articulos.descripcion.trim();
            if (this.articulos.descripcion != "" && this.articulos.precio > 0 && this.articulos.cantidad > 0) {
                const res = await axios.put(URL_DATOS + "/articulos/" + this.id,{
                    descripcion: this.articulos.descripcion,
                    precio: this.articulos.precio,
                    cantidad: this.articulos.cantidad,
                });
                console.log(res);
                alert("Se han guardado los cambios al Artículo " + this.id);
                this.$router.push({name:"articulos", params: {}});
            } else {
                alert("Verifique que los datos sean correctos!");
            }
      },
    },
};
</script>