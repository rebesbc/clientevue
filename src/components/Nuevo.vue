<template>
    <div class="Nuevo">
        <img class="imgencabezado" src="../assets/shopping-bag.png"/>
        <h2>Datos del Nuevo Artículo</h2> 
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
            min="1"
        />
        <button @click.prevent="nuevo()" class="btn btn-primary btn-lg btn-save">
            Guardar nuevo Artículo
        </button>
    </div>
</template>

<script>
import {URL_DATOS} from '../utils/constantes'
import axios from "axios"

export default {
   components: {},
   name: "Nuevo",
   data: function(){
      return {
        articulos: []
      };
   },
   methods: {
    nuevo: async function(){
        if (typeof this.articulos.descripcion != 'undefined') {
            this.articulos.descripcion = this.articulos.descripcion.trim();
        }
        if (this.articulos.descripcion != null && this.articulos.precio != null && this.articulos.cantidad != null
        && this.articulos.descripcion != "" && this.articulos.precio > 0 && this.articulos.cantidad > 0) {
            const res = await axios.post(URL_DATOS + "/articulos/",{
                descripcion: this.articulos.descripcion,
                precio: this.articulos.precio,
                cantidad: this.articulos.cantidad,
            });
            console.log(res);
            alert("Se ha agregado el nuevo Artículo");
            this.$router.push({name:"articulos", params: {}});
        } else {
            alert("Verifique que los datos sean correctos!");
        }
    },
   },
}
</script>