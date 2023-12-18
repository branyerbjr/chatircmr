<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> CHATIRCMR </a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <i type="button" class="btn position-relative bi bi-bell">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </i>
        </li>
        <li class="nav-item">
          <i class="btn bi bi-lightbulb"></i>
        </li>
        <li class="nav-item dropdown">
          <i
            class="btn bi bi-person-circle dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </i>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Configuración</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  // Navbar component logic
};
</script>

<style scoped>
/* Navbar component styles */
</style>
