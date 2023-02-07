<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';

const activeCheckbox = ref(true);
const disabledCheckbox = ref(true);
const disabledCheckboxChecked = ref(true);

const fruitList = ref([
  { name: 'Apples', id: 'f1' },
  { name: 'Bananas', id: 'f2' },
  { name: 'Oranges', id: 'f3' },
  { name: 'Pears', id: 'f4' }
]);

const selectedFruits = ref([]);
const switchFine = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Active Checkbox</h2>
  <div class="line">
    <Checkbox
      label="Active Checkbox"
      id="activeCheckbox"
      name="activeCheckbox"
      value="Active"
      v-model:checked="activeCheckbox"
    />
  </div>
  <h2 class="heading-2">Disabled Checkbox</h2>
  <div class="line">
    <Checkbox
      label="Disabled Checkbox"
      id="disabledCheckbox"
      name="disabledCheckbox"
      value="Disabled"
      v-model:disabled="disabledCheckbox"
      v-model:checked="disabledCheckboxChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    Selected fruits:
    <span class="selected" v-for="(fruit, i) in selectedFruits" :key="i">
      <strong>{{ fruit }}</strong
      >,
    </span>
    <CheckboxGroup
      v-model:value="selectedFruits"
      name="fruits"
      :options="fruitList"
    />
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchFine }}</p>
    <checkbox
      label="I'm fine"
      id="switch"
      name="switch"
      value="I'm fine"
      type="switch"
      v-model:checked="switchFine"
    />
  </div>
</template>

<style lang="scss" scoped>
.selected {
  display: inline-flex;
  padding: 0 0 8px 8px;
}
</style>
