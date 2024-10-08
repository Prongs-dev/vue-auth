<template>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="register">
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[rules.required]"
        required
      ></v-text-field>
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
      <v-btn type="submit" :disabled="!valid">Sign Up</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
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
    const response = await fetch("your-api-endpoint/register", {
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
  