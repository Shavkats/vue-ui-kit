<script setup>
import { ref } from 'vue';
import Radiobutton from '@/components/Radiobutton.vue';
const colorList = ref([
  { name: 'Red', id: 'fw1' },
  { name: 'Yellow', id: 'fw2' },
  { name: 'Blue', id: 'fw3' },
  { name: 'Green', id: 'fw4' }
]);

const selectedColor = ref('');
const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>
      Selecled color: <strong>{{ selectedColor }}</strong>
    </p>
    <div v-for="fw in colorList" :key="fw.id">
      <Radiobutton
        :value="fw.name"
        :label="fw.name"
        :id="fw.id"
        name="color"
        v-model:checkedValue="selectedColor"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Radiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="RadiobuttonDisabled"
      name="RadiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>
