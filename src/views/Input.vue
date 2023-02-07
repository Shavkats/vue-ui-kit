<script setup>
import { ref, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import {
  minLength,
  email,
  numeric,
  maxLength,
  sameAs,
  helpers
} from '@vuelidate/validators';

const nameField = ref('');
const emailField = ref('');
const luckyField = ref('');
const passwordField = ref('');
const confirmPasswordField = ref('');
const developmentField = ref('');

const mustBeDevelopment = (value) => value.includes('development');

const rules = computed(() => ({
  nameField: {
    minLength: minLength(3)
  },
  emailField: {
    email
  },
  luckyField: {
    maxLength: maxLength(2),
    numeric
  },
  confirmPasswordField: {
    sameAsPassword: sameAs(passwordField.value)
  },
  developmentField: {
    developmentField: helpers.withMessage(
      'Field must have the word "development"',
      mustBeDevelopment
    )
  }
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  developmentField
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert('Form submitted');
};
</script>

<template>
  <h1 class="heading-1">Inputs</h1>
  <form @submit.prevent="submitForm">
    <Input
      label="Name"
      name="name"
      placeholder="Enter your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Enter your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Enter your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      placeholder="Please type password"
      v-model:value="passwordField"
      type="password"
    />

    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"
    />
    <Input
      label="Development string"
      name="development"
      placeholder="Input string with development"
      v-model:value="v.developmentField.$model"
      :error="v.developmentField.$errors"
    />
    <Button label="Submit" color="primary"></Button>
  </form>
</template>
