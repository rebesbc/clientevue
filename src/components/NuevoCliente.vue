<template>
    <div class="NuevoCliente">
        <img class="imgencabezado" src="../assets/customer.png"/>
        <h2>Datos del Nuevo Cliente</h2>
        <label for="txtnombre">Nombre del cliente:</label>
        <input type="text" name="txtnombre" id="txtnombre" v-model="clientes.nombre" class="form-control">
        <label for="txtdireccion">Direccion del cliente:</label>
        <input type="text" name="txtdireccion" id="txtdireccion" v-model="clientes.direccion" class="form-control">
        <label for="txtrfc">RFC del cliente:</label>
        <input type="text" name="txtrfc" id="txtrfc" v-model="clientes.rfc" class="form-control" maxlength="13">
        <button @click.prevent="nuevoCliente()" class="btn btn-primary btn-lg btn-save">Guardar nuevo Cliente</button>
    </div>
</template>

<script>
import { URL_DATOS } from '@/utils/constantes';
import axios from 'axios';

export default {
    name: "NuevoCliente",
    components: {  },
    data: function() {
        return {
            clientes: [],
        };
    },
    methods: {
        nuevoCliente: async function() {
            if (typeof this.clientes.nombre != 'undefined') {
                this.clientes.nombre = this.clientes.nombre.trim();
            }
            if (typeof this.clientes.direccion != 'undefined') {
                this.clientes.direccion = this.clientes.direccion.trim();
            }
            if (typeof this.clientes.rfc != 'undefined') {
                this.clientes.rfc = this.clientes.rfc.trim();
            }
            if (this.clientes.nombre != null && this.clientes.direccion != null && this.clientes.rfc != null
            && this.clientes.nombre != "" && this.clientes.direccion != "" && this.clientes.rfc != "") {
                const res = await axios.post(URL_DATOS + "/clientes/", {
                    nombre: this.clientes.nombre,
                    direccion: this.clientes.direccion,
                    rfc: this.clientes.rfc,
                });
                console.log(res);
                alert("Se ha agregado el nuevo Cliente");
                this.$router.push({name:"clientes", params: {}});
            } else {
                alert("Verifique que ningún campo esté vacío!");
            }
        },
    },
}
</script>