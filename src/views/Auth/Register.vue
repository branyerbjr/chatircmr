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
                  <a class="btn btn-outline-light w-100" href="javascript:;">
                    
                  </a>
                </div>
              </div>
              <div class="card-body">
                <form role="form">
                  <input
                    class="form-control mb-3"
                    type="number"
                    placeholder="DNI"
                    aria-label="DNI"
                  />
                  <input
                    class="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <input
                    class="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                  />
                  <input
                    class="form-control mb-3"
                    type="number"
                    placeholder="Celular"
                    aria-label="Celular"
                  />
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      checked
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree to the
                      <a href="javascript:;" class="text-dark font-weight-bolder"
                        >Terms and Conditions</a
                      >
                    </label>
                  </div>
                  <div class="text-center">
                    <button
                      class="btn btn-dark btn-block my-4 mb-2"
                      type="submit"
                    >
                      Registrar
                    </button>
                  </div>
                  <p class="text-sm mt-3 mb-0">
                    Ya tienes una cuenta?
                    <router-link to="/auth/login"><a class="text-dark font-weight-bolder"
                      >Iniciar Sesion</a
                    ></router-link>
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
  export default {
    name: "Register",
    components: {},
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