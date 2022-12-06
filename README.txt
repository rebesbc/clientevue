El proyecto actualmente es capaz de agregar, editar, eliminar y visualizar los artículos existentes en la base de datos phpMyAdmin 'pw', en la tabla 'articulos'

-- Para el lado del servidor
npm install cors --save
const cors = require("cors");
app.use(cors());
!-- Para levantar el servidor, encender Apache y MySQL en XAMPP y abrir una terminal con la línea de comando 'node app'


-- Para el lado del cliente
npm install @vue/composition-api --force <si no se instala con --save>
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
!-- Para levantar el servidor, abrir una terminal con la línea de comando 'npm run serve'

-- Archivos importantes que se editaron y sus ubicaciones
clientepw/src/components/ ArticulosLista.vue
* Las funciones:
- traeArticulos()
- eliminarArticulo()
se definen directamente en el archivo

* Las funciones:
- detalleArticulo()
- editarArticulo()
- nuevoArticulo()
hacen llamado a un archivo .vue diferente al actual, respectivo de la función que realizan (ej.: editarArticulo() se utiliza en el componente Editar.vue). Para que funcionen, se deben agregar al router (index.js) las referencias a los componentes