<template>
  <v-app>
    <v-toolbar color="indigo" dark>
      <v-toolbar-items>
        <v-btn text to="/login" class="mr-4">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
