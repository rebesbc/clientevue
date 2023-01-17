<template>
  <div class="NuevaSalida">
    <img class="imgencabezado" src="../assets/sale.png"/>
    <h2>Datos de la Nueva Salida</h2>
    <label for="selectArticulo">Articulo</label>
    <select
      name="selectArticulo"
      id="selectArticulo"
      class="form-control"
      v-model="salidas.articulo_id"
    >
      <option v-for="art in articulos" :key="art.id" :value="art.id">
        {{ art.descripcion }}
      </option>
    </select>
    <label for="txtcantidad">Cantidad</label>
    <input
      type="number"
      name="txtcantidad"
      id="txtcantidad"
      v-model="salidas.cantidad"
      class="form-control"
      min="1"
    />
    <label for="txtcosto">Costo por unidad</label>
    <input
      type="number"
      name="txtcosto"
      id="txtcosto"
      v-model="salidas.costo_unidad"
      class="form-control"
      min="1"
    />
    <label for="selectCliente">Cliente</label>
    <select
      name="selectCliente"
      id="selectCliente"
      class="form-control"
      v-model="salidas.cliente_id"
    >
      <option v-for="cli in clientes" :key="cli.id" :value="cli.id">
        {{ cli.nombre }}
      </option>
    </select>
    <button @click.prevent="nuevo()" class="btn btn-primary btn-lg btn-save">
      Guardar nueva Salida
    </button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";

export default {
  components: {},
  name: "NuevaSalida",
  data: function () {
    return {
      salidas: [],
      articulos: [],
      clientes: [],
    };
  },
  created() {
    this.traerArticulos(), this.traerClientes();
  },
  methods: {
    nuevo: async function () {
      if (this.salidas.articulo_id != null && this.salidas.cliente_id != null && this.salidas.cantidad > 0
      && this.salidas.costo_unidad > 0) {
        const res = await axios.post(URL_DATOS + "/salidas/", {
          articulo_id: this.salidas.articulo_id,
          cliente_id: this.salidas.cliente_id,
          cantidad: this.salidas.cantidad,
          costo_unidad: this.salidas.costo_unidad,
        });
        await this.traeDetalle();
        await this.actualizar();
        //console.log(res);
        alert("Se ha registrado la nueva salida");
        this.$router.push({ name: "salidas", params: {} });
      } else {
        alert("Verifique que la información sea correcta!");
      }
    },
    traerArticulos: async function () {
      let a = [];
      await axios
        .get(URL_DATOS + "/articulos")
        .then(function (response) {
          //console.log(response);
          a = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      this.articulos = a;
    },
    traerClientes: async function () {
      let c = [];
      await axios
        .get(URL_DATOS + "/clientes")
        .then(function (response) {
          console.log(response);
          c = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      this.clientes = c;
    },
    traeDetalle: async function () {
      let a = [];
      await axios
        .get(URL_DATOS + "/articulos/" + this.salidas.articulo_id)
        .then(function (response) {
          console.log(response.data[0]);
          a = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
      this.articulos = a;
    },
    actualizar: async function () {
      const res = await axios.put(
        URL_DATOS + "/articulos/" + this.salidas.articulo_id,
        {
          descripcion: this.articulos.descripcion,
          precio: this.articulos.precio,
          cantidad:
            parseInt(this.articulos.cantidad) -
            parseInt(this.salidas.cantidad),
        }
      );
      console.log(res);
    },
  },
};
</script>