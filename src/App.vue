<template>
  <div id="app">
    <nav>
      <router-link to="/login" class="mr-4">Login</router-link>
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Add some basic styles for the nav links */
nav {
  padding: 1rem;
  background-color: #f8f9fa; /* Light background */
}
nav a {
  text-decoration: none;
  color: #007bff; /* Bootstrap primary color */
}
nav a:hover {
  text-decoration: underline;
}
</style>
