<template>
    <div class="NuevaEntrada">
        <img class="imgencabezado" src="../assets/trolley.png"/>
        <h2>Datos de la Nueva Entrada</h2> 
        <label for="selectArticulo">Articulo</label>
        <select 
        name="selectArticulo"
        id="selectArticulo"
        class="form-control"
        v-model="entradas.articulo_id">
            <option v-for="art in articulos" :key="art.id" :value="art.id">{{art.descripcion}}</option>
        </select>
        <label for="txtcantidad">Cantidad</label>
        <input 
            type="number"
            name="txtcantidad" 
            id="txtcantidad" 
            v-model="entradas.cantidad"
            class="form-control"
            min="1"
        />
        <label for="txtcosto">Costo por unidad</label>
        <input 
            type="number" 
            name="txtcosto" 
            id="txtcosto" 
            v-model="entradas.costo_unidad"
            class="form-control"
            min="1"
        />
        <label for="selectProveedores">Proveedor</label>
        <select 
        name="selectProveedores"
        id="selectProveedores"
        class="form-control"
        v-model="entradas.proveedor_id">
            <option v-for="prov in proveedores" :key="prov.id" :value="prov.id">{{prov.nombre}}</option>
        </select>
        <button @click.prevent="nuevo()" class="btn btn-primary btn-lg btn-save">
            Guardar nueva Entrada
        </button>
    </div>
</template>

<script>
import {URL_DATOS} from '../utils/constantes'
import axios from "axios"

export default {
    components: {},
    name: "NuevaEntrada",
    data: function(){
        return {
            entradas: [],
            articulos: [],
            proveedores: [],
        };
    },
    created() {
        this.traerArticulos(),
        this.traerProveedores();
    },
    methods: {
        nuevo: async function(){
            if (this.entradas.articulo_id != null && this.entradas.proveedor_id != null && this.entradas.cantidad > 0
            && this.entradas.costo_unidad > 0) {
                const res = await axios.post(URL_DATOS + "/entradas/",{
                    articulo_id: this.entradas.articulo_id,
                    proveedor_id: this.entradas.proveedor_id,
                    cantidad: this.entradas.cantidad,
                    costo_unidad: this.entradas.costo_unidad
                });
                await this.traeDetalle();
                await this.actualizar();
                //console.log(res);
                alert("Se ha registrado la nueva entrada");
                this.$router.push({name:"entradas", params: {}});
            } else {
                alert("Verifique que la información sea correcta!");
            }
        },
        traerArticulos: async function(){
         let a = []
         await axios.get(URL_DATOS+"/articulos")
         .then(function(response){
            //console.log(response);
            a = response.data;
         })
         .catch(function(error){
            console.log(error);
         });
         this.articulos = a;
      },
        traerProveedores: async function(){
            let p = []
            await axios.get(URL_DATOS+"/proveedores")
            .then(function(response){
                console.log(response);
                p = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
            this.proveedores = p;
        },
        traeDetalle: async function(){
         let a = []
         await axios.get(URL_DATOS + "/articulos/" + this.entradas.articulo_id)
         .then(function(response){
            console.log(response.data[0]);
            a = response.data[0];
         })
         .catch(function(error){
            console.log(error);
         });
         this.articulos = a;
      },
      actualizar: async function(){
        const res = await axios.put(URL_DATOS + "/articulos/" + this.entradas.articulo_id,{
            descripcion: this.articulos.descripcion,
            precio: this.articulos.precio,
            cantidad: parseInt(this.entradas.cantidad) + parseInt(this.articulos.cantidad),
        });
        console.log(res);
      },
    },
}
</script>

