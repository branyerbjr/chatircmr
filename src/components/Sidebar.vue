<template>
  <aside class="bg-light">
    <!-- Sidebar content goes here -->
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/dashboard/chat" class="nav-link"><i class="bi bi-whatsapp"></i> Chats</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/contact" class="nav-link"><i class="bi bi-person-lines-fill"></i> Contactos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/contact" class="nav-link"><i class="bi bi-chat-left-dots"></i> Respuestas Rapidas</router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  // Sidebar component logic
};
</script>

<style scoped>
/* Sidebar component styles */
</style>
