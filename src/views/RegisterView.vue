<template>
  <v-container class="d-flex justify-center align-center min-vh-100" fluid>
    <v-card class="mx-auto px-6 py-4" elevation="10" width="400">
      <v-card-title class="text-h5 text-center font-weight-medium py-4">
        Create an Account
      </v-card-title>

      <v-divider></v-divider>

      <v-form
        ref="form"
        class="px-6 py-4"
        v-model="valid"
        @submit.prevent="register"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          label="Full Name"
          :rules="[rules.required]"
          required
          prepend-inner-icon="mdi-account"
          outlined
          solo
          clearable
          class="mt-4"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          :rules="[rules.required, rules.email]"
          required
          prepend-inner-icon="mdi-email"
          outlined
          solo
          clearable
          class="mt-4"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          :rules="[rules.required]"
          type="password"
          required
          prepend-inner-icon="mdi-lock"
          outlined
          solo
          clearable
          class="mt-4"
        ></v-text-field>

        <v-btn
          type="submit"
          :disabled="!valid"
          color="primary"
          block
          large
          rounded
          elevation="3"
          class="mt-6"
        >
          Sign Up
        </v-btn>

        <v-alert
          v-if="error"
          type="error"
          color="red lighten-3"
          border="left"
          elevation="2"
          dark
          dense
          class="mt-4"
        >
          {{ error }}
        </v-alert>
      </v-form>

      <v-divider class="mt-6"></v-divider>

      <v-card-text class="text-center py-4">
        Already have an account?
        <v-btn
          text
          color="primary"
          @click="navigateToLogin"
          class="font-weight-medium"
        >
          Log In
        </v-btn>
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
  