<template>
  <div class="container mt-4">
    <h2 class="mb-4">CONTACTOS</h2>
    <button @click="abrirModalAgregar" class="btn btn-success mb-4">
      Agregar Contacto
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Notas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contacto in contactos" :key="contacto.id">
          <td>{{ contacto.id }}</td>
          <td>{{ contacto.nombre }}</td>
          <td>{{ contacto.telefono }}</td>
          <td>
            <ul>
              <li v-for="nota in contacto.notas" :key="nota.id">{{ nota }}</li>
            </ul>
          </td>
          <td>
            <button
              @click="editarContacto(contacto.id)"
              class="btn btn-warning btn-sm"
            >
              Editar
            </button>
            <button
              @click="eliminarContacto(contacto.id)"
              class="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      contactos: [],
    };
  },
  methods: {
    cargarContactos() {
      axios
        .get("http://127.0.0.1:8000/api/clientes")
        .then((response) => {
          this.contactos = response.data;
        })
        .catch((error) => {
          console.error("Error al cargar la lista de contactos", error);
        });
    },
    agregarContacto() {
      console.log("Agregar nuevo contacto");
      // Agrega la lógica para agregar un nuevo contacto
    },
    editarContacto(id) {
      console.log("Editar contacto con ID:", id);
      // Agrega la lógica para editar el contacto
    },
    eliminarContacto(id) {
      console.log("Eliminar contacto con ID:", id);
      // Agrega la lógica para eliminar el contacto
    },
  },
  mounted() {
    this.cargarContactos();
  },
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí */
</style>
