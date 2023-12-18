<template>
  <div class="home-container">
    <h1>Welcome to CHATIRCMR</h1>
    <div class="button-container">
      <router-link to="/auth/login" class="btn btn-primary">Login</router-link>
      <router-link to="/auth/register" class="btn btn-secondary"
        >Register</router-link
      >
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

.btn {
  margin: 0 10px;
}
</style>
