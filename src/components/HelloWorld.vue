<template>
  <div class="hello">
    <div class="banner">
      <img src="../assets/warehouse.png" alt="" id="imgbanner"/>
    </div>
    <h1>{{ msg }}</h1>
    <h1>R A C</h1>
    <p>
      Proyecto final de la materia de Programación Web impartida por<br>
      el MC. Martín Leonardo Nevarez Rivas para la carrera de <br>
      Ingeniería en Sistemas Computacionales.<br>
    </p>
    <p>
      Somos Broncos TECNM Campus Culiacán.
    </p>
    <h3>Equipo</h3>
    <ul>
      <li>Carlos Damián Mendoza Ponce</li>
      <li>José Alejandro Escobar Sánchez</li>
      <li>Rebeca Sofía Bon Cabanillas</li>
    </ul>
    <h3>Desarrollado con</h3>
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a></li>
      <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a></li>
      <li><a href="https://nodejs.org/" target="_blank" rel="noopener">Node.js</a></li>
      <li><a href="https://www.apachefriends.org/" target="_blank" rel="noopener">XAMPP</a></li>
    </ul>
    <img src="../assets/logotecnm.png" id="logotec" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2075d6;
}
</style>
