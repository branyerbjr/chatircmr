<template>
  <main class="main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container d-flex justify-content-center align-items-center">
          <div
            class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            id="logincard"
          >
            <div class="card card-plain">
              <div class="pb-0 card-header text-center">
                <router-link to="/"
                  ><img
                    src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2048x2048-wo3g2qq0.png"
                    alt="logo"
                    style="width: 4rem; padding: 5px"
                /></router-link>
                <h4 class="font-weight-bold">INICIAR SESIÓN</h4>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="loginUser">
                  <div class="mb-3">
                    <input
                      v-model="email"
                      class="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      autocomplete="email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      v-model="password"
                      class="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input
                      v-model="keepSession"
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Mantener Sesion
                    </label>
                  </div>
                  <div class="text-center">
                    <button
                      class="btn btn-dark btn-block my-4 mb-2"
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
              <div class="px-1 pt-0 text-center card-footer px-lg-2">
                <p class="mx-auto mb-4 text-sm">
                  No tienes cuenta?
                  <router-link to="/auth/register"
                    ><a class="text-success text-gradient font-weight-bold"
                      >Registrarse</a
                    ></router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      keepSession: false,
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        });

        // Verifica si la respuesta es exitosa (código 200)
        if (response.status === 200) {
          // La respuesta contiene el token, puedes almacenarlo o manejarlo según tus necesidades.
          const token = response.data.token;
          if (this.keepSession) {
            localStorage.setItem("token", token);
          } else {
            sessionStorage.setItem("token", token);
          }

          console.log("Inicio de sesión exitoso. Token:", token);

          // Redirige al dashboard
          this.$router.push("/dashboard");
        } else {
          console.error(
            "Error al iniciar sesión. Código de respuesta:",
            response.status
          );
          window.alert("Error al iniciar sesión. Verifica tus credenciales.");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        window.alert("Error al iniciar sesión. Verifica tus credenciales.");
      }
    },
  },
};
</script>

<style scoped>
#logincard {
  margin-top: 10%;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
main {
  background: linear-gradient(
    to right,
    #445e45,
    #abf8af
  ); /* Cambia los colores según tu preferencia */
  height: 100vh; /* Ocupa el 100% del viewport height */
  width: 100%; /* Ocupa el 100% del ancho disponible */
}

/* Agrega estilos adicionales si es necesario */
</style>
