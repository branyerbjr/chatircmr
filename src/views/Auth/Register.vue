<template>
  <main class="main-content mt-0">
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card" id="logincard">
            <div class="card-header text-center pt-4">
              <h5>REGISTRARSE</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3">
              <div class="col-3 me-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;"></a>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="registerUser">
                <input
                  v-model="dni"
                  class="form-control mb-3"
                  type="number"
                  placeholder="DNI"
                  aria-label="DNI"
                />
                <input
                  v-model="email"
                  class="form-control mb-3"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
                <input
                  v-model="password"
                  class="form-control mb-3"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
                <input
                  v-model="celular"
                  class="form-control mb-3"
                  type="number"
                  placeholder="Celular"
                  aria-label="Celular"
                />
                <!-- Otros campos del formulario -->
                <div class="text-center">
                  <button
                    class="btn btn-dark btn-block my-4 mb-2"
                    type="submit"
                  >
                    Registrar
                  </button>
                </div>
                <p class="text-sm mt-3 mb-0">
                  ¿Ya tienes una cuenta?
                  <router-link to="/auth/login">
                    <a class="text-dark font-weight-bolder">Iniciar Sesión</a>
                  </router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      dni: "",
      email: "",  
      password: "",
      celular: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        // Consultar DNI antes de registrar
        const dniResponse = await axios.get(
          `http://127.0.0.1:8000/api/consultar-dni/${this.dni}`
        );
        const { nombres, apellido_paterno, apellido_materno } =
          dniResponse.data.data;

        // Realizar registro con la información obtenida
        const registerResponse = await axios.post(
          "http://127.0.0.1:8000/api/register",
          {
            dni: this.dni,
            nombres: `${nombres}`,
            apellidos: `${apellido_paterno} ${apellido_materno}`,
            email: this.email,
            password: this.password,
            nombreUsuario: this.dni.toString(),
            rol: "Administrador",
            perteneceA: "6580386f91868d6067043482",
            celular: this.celular.toString(),
          }
        );

        console.log("Usuario registrado:", registerResponse.data);
        this.$router.push("/auth/login");
      } catch (error) {
        if (error.response && error.response.status === 422) {
          console.log("Errores de validación:", error.response.data.errors);
        }
        console.error("Error al registrar usuario:", error);
        window.alert("Error al registrar usuario.");
      }
    },
  },
};
</script>

<style scoped>
#logincard {
  margin-top: 10%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
main {
  background: linear-gradient(to right, #445e45, #abf8af);
  height: 100vh;
  width: 100%;
}
</style>
