<template>
  <v-container class="d-flex align-center justify-center min-vh-100">
    <v-card elevation="3" class="px-8 py-6">
      <v-card-title class="justify-center">
        <span class="text-h6 font-weight-medium">Verify Your Account</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="verify"
        lazy-validation
      >
        <v-card-text>
          <v-otp-input
            v-model="pin"
            :length="6"
            :input-class="'v-text-field'"
            label="Enter Verification PIN"
            :rules="[rules.required, rules.pin]"
            required
            outlined
            solo
            hide-details
            class="mt-4 mb-6"
          />
          <v-btn
            type="submit"
            :disabled="!valid"
            color="primary"
            block
            large
            rounded
          >
            Verify
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
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const valid = ref(false);
const pin = ref("");
const error = ref("");
const rules = {
  required: (value) => !!value || "Required.",
  pin: (value) => /^\d{6}$/.test(value) || "PIN must be 6 digits.",
};

const verify = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin: pin.value }),
    });

    if (!response.ok) {
      throw new Error("Verification failed. Please check your PIN.");
    }

    // Handle successful verification (e.g., navigate to login page)
  } catch (err) {
    error.value = err.message;
  }
};
</script>
  