<template>
  <div class="home-container">
    <h1 class="display-4">Welcome to CHATIRCRM</h1>
    <div class="button-container">
      <router-link to="/auth/login" class="btn btn-primary btn-lg mr-2">Login</router-link>
      <router-link to="/auth/register" class="btn btn-secondary btn-lg">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}

.button-container {
  margin-top: 20px;
}
</style>
