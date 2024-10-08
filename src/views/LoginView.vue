<template>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="login">
      <v-text-field
        v-model="email"
        label="Email"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        :rules="[rules.required]"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" :disabled="!valid">Log In</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
    <v-btn @click="logout">Log Out</v-btn>
  </v-container>
</template>
  
  <script setup>
import { ref } from "vue";

const valid = ref(false);
const email = ref("");
const password = ref("");
const error = ref("");
const rules = {
  required: (value) => !!value || "Required.",
  email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
};

const login = async () => {
  try {
    const response = await fetch("your-api-endpoint/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please check your credentials.");
    }

    // Handle successful login (e.g., store user info, navigate to dashboard)
  } catch (err) {
    error.value = err.message;
  }
};

const logout = () => {
  // Implement logout functionality (e.g., clear user data, navigate to login page)
};
</script>
  