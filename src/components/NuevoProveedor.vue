<template>
    <div class="NuevoProveedor">
        <img class="imgencabezado" src="../assets/supplier.png"/>
        <h2>Datos del Nuevo Proveedor</h2> 
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
        <button @click.prevent="nuevo()" class="btn btn-primary btn-lg btn-save">
            Guardar nuevo Proveedor
        </button>
    </div>
</template>

<script>
import {URL_DATOS} from '../utils/constantes'
import axios from "axios"

export default {
   components: {},
   name: "NuevoProveedor",
   data: function(){
      return {
        proveedores: []
      };
   },
   methods: {
    nuevo: async function(){
        if (typeof this.proveedores.nombre != 'undefined') {
            this.proveedores.nombre = this.proveedores.nombre.trim();
        }
        if (typeof this.proveedores.direccion != 'undefined') {
            this.proveedores.direccion = this.proveedores.direccion.trim();
        }
        if (typeof this.proveedores.rfc != 'undefined') {
            this.proveedores.rfc = this.proveedores.rfc.trim();
        }
        if (typeof this.proveedores.telefono != 'undefined') {
            this.proveedores.telefono = this.proveedores.telefono.trim();
        }
        if (this.proveedores.nombre != null && this.proveedores.direccion != null && this.proveedores.rfc != null 
        && this.proveedores.telefono != null && this.proveedores.nombre != "" && this.proveedores.direccion != "" 
        && this.proveedores.rfc != "" && this.proveedores.telefono != "") {
            const res = await axios.post(URL_DATOS + "/proveedores/",{
                nombre: this.proveedores.nombre,
                direccion: this.proveedores.direccion,
                rfc: this.proveedores.rfc,
                telefono: this.proveedores.telefono,
                observaciones: this.proveedores.observaciones,
            });
            //console.log(res);
            alert("Se ha agregado el nuevo proveedor a la base de datos");
            this.$router.push({name:"proveedores", params: {}});
        } else {
            alert("Verifique que ningún campo esté vacío!");
        }
    },
   },
}
</script>