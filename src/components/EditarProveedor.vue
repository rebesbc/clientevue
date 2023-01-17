<template>
    <div class="EditarProveedor">
        <img class="imgencabezado" src="../assets/editsupplier.png"/>
        <h2>Datos del Proveedor</h2> 
        <label for="txtnombre">Nombre</label>
        <input 
            type="text" 
            name="txtnombre" 
            id="txtnombre" 
            v-model="proveedores.nombre"
            class="form-control"
        />
        <label for="txtdireccion">Direccion</label>
        <input 
            type="text" 
            name="txtdireccion" 
            id="txtdireccion" 
            v-model="proveedores.direccion"
            class="form-control"
        />
        <label for="txtrfc">RFC</label>
        <input 
            type="text" 
            name="txtrfc" 
            id="txtrfc" 
            v-model="proveedores.rfc"
            class="form-control"
        />
        <label for="txttelefono">Telefono</label>
        <input 
            type="text" 
            name="txttelefono" 
            id="txttelefono" 
            v-model="proveedores.telefono"
            class="form-control"
        />
        <label for="txtObservaciones">Observaciones</label>
        <input 
            type="text" 
            name="txtObservaciones" 
            id="txtObservaciones" 
            v-model="proveedores.observaciones"
            class="form-control"
        />
        <button @click.prevent="actualizar()" class="btn btn-primary btn-lg btn-save">
            Actualizar Proveedor
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
            proveedores: [],
        };
    },
    created() {
        this.traeDetalle();
    },
    methods: {
        traeDetalle: async function(){
         let p = []
         await axios.get(URL_DATOS + "/proveedores/" + this.id)
         .then(function(response){
            //console.log(response.data[0]);
            p = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.proveedores = p;
      },
      actualizar: async function(){
        this.proveedores.nombre = this.proveedores.nombre.trim();
        this.proveedores.direccion = this.proveedores.direccion.trim();
        this.proveedores.rfc = this.proveedores.rfc.trim();
        this.proveedores.telefono = this.proveedores.telefono.trim();
        if (this.proveedores.nombre != null && this.proveedores.direccion != null && this.proveedores.rfc != null 
        && this.proveedores.telefono != null && this.proveedores.nombre != "" && this.proveedores.direccion != "" 
        && this.proveedores.rfc != "" && this.proveedores.telefono != "") {
            const res = await axios.put(URL_DATOS + "/proveedores/" + this.id,{
                nombre: this.proveedores.nombre,
                direccion: this.proveedores.direccion,
                rfc: this.proveedores.rfc,
                telefono: this.proveedores.telefono,
                observaciones: this.proveedores.observaciones,
            });
            //console.log(res);
            alert("Se han guardado los cambios");
            this.$router.push({name:"proveedores", params: {}});
        } else {
            alert("Verifique que ningún campo esté vacío!");
        }
      },
    },
};
</script>