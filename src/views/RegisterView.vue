<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card class="mx-auto" elevation="8" width="400">
      <v-card-title class="text-h5 text-center">Create an Account</v-card-title>
      <v-divider></v-divider>

      <v-form ref="form" class="px-4 py-4" v-model="valid" @submit.prevent="register">
        <v-text-field
          v-model="name"
          label="Name"
          :rules="[rules.required]"
          required
          prepend-icon="mdi-account"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          :rules="[rules.required, rules.email]"
          required
          prepend-icon="mdi-email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          :rules="[rules.required]"
          type="password"
          required
          prepend-icon="mdi-lock"
          clearable
        ></v-text-field>

        <v-btn
          type="submit"
          :disabled="!valid"
          color="primary"
          class="mt-4"
          elevation="2"
          block
        >
          Sign Up
        </v-btn>

        <v-alert v-if="error" type="error" class="mt-3">{{ error }}</v-alert>
      </v-form>

      <v-divider></v-divider>
      <v-card-text class="text-center mt-3">
        Already have an account?
        <v-btn text @click="navigateToLogin">Log In</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script setup>
import { ref } from "vue";

const valid = ref(false);
const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const rules = {
  required: (value) => !!value || "Required.",
  email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
};

const register = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Registration failed. Please try again.");
    }

    // Handle successful registration (e.g., navigate to verification page)
  } catch (err) {
    error.value = err.message;
  }
};
</script>
  