<template>
  <v-container>
    <v-form ref="form" v-model="valid" @submit.prevent="verify">
      <v-text-field
        v-model="pin"
        label="Enter Verification PIN"
        :rules="[rules.required, rules.pin]"
        required
      ></v-text-field>
      <v-btn type="submit" :disabled="!valid">Verify</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
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
    const response = await fetch("your-api-endpoint/verify", {
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
  