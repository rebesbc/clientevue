<template>
  <div id="app">
    <nav>
      <img src="./assets/logo.png" alt="" class="logonav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/articulos">Inventario</router-link>
      <router-link to="/clientes">Clientes</router-link>
      <router-link to="/proveedores">Proveedores</router-link>
      <router-link to="/entradas">Entradas</router-link>
      <router-link to="/salidas">Salidas</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.btn-new {
  margin-bottom: 45px;
}

.btn-save {
  margin-top: 45px;
}

.imgencabezado {
  width: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.logonav {
  position: relative;
  width: 100px;
  margin-right: 100px;
  margin-left: -200px;
}

.banner {
  padding-top: 45px;
  background-color: #5baade;
  margin-bottom: 30px;
  margin-top: -30px;
}

.Detalle span {
  font-weight: bold;
}

#tabla-registros {
  width: 80%;
  margin: 0 auto 0 auto;
  border-top: 1px solid #b8b8b8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#selectArticulo {
  width: 400px;
  margin: 0 auto 0 auto;
}

#selectProveedores {
  width: 400px;
  margin: 0 auto 0 auto;
}

#selectCliente {
  width: 400px;
  margin: 0 auto 0 auto;
}

#logotec {
  margin-top: 50px;
  width: 400px;
}

#imgbanner {
  width: 400px;
  margin-bottom: 50px;
}

label {
  margin: 10px 0px 10px 0px;
  font-weight: bold;
}

input[type="text"] {
  width: 400px;
  margin: 0 auto 0 auto;
}

input[type="number"] {
  width: 400px;
  margin: 0 auto 0 auto;
}

nav {
  background-color: #1746A2;
  padding: 30px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    margin: 0px 15px 0px 15px;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #FF731D;
    }
  }
}

</style>
