<template>
  <v-container class="d-flex align-center justify-center min-vh-400">
    <v-card elevation="3" class="px-8 py-6" width="400">
      <v-card-title class="justify-center">
        <span class="text-h6 font-weight-medium">Login to Your Account</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="login"
        lazy-validation
      >
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required, rules.email]"
            required
            outlined
            solo
            prepend-inner-icon="mdi-email"
            class="mt-4"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            :rules="[rules.required]"
            type="password"
            required
            outlined
            solo
            prepend-inner-icon="mdi-lock"
            class="mt-4 mb-6"
          ></v-text-field>
          <v-btn
            type="submit"
            :disabled="!valid"
            color="primary"
            block
            large
            rounded
          >
            Log In
          </v-btn>
          <v-alert
            v-if="error"
            type="error"
            border="left"
            elevation="2"
            color="red lighten-3"
            dark
            dense
            class="mt-4"
          >
            {{ error }}
          </v-alert>
        </v-card-text>
      </v-form>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="logout" color="secondary" text>Log Out</v-btn>
      </v-card-actions>
    </v-card>
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
    const response = await fetch("http://localhost:3001/api/auth/login", {
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
  