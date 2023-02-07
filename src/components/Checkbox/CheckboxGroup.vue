<script setup>
import Checkbox from './Checkbox.vue';

const emit = defineEmits(['update:value']);
const props = defineProps({
  value: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const nameKeyExists = value.every((option) =>
        Object.keys(option).includes('name')
      );
      const idKeyExists = value.every((option) =>
        Object.keys(option).includes('id')
      );
      return nameKeyExists && idKeyExists;
    }
  }
});

const check = (params) => {
  const updateValue = [...props.value];
  if (params.checked) {
    updateValue.push(params.name);
  } else {
    updateValue.splice(updateValue.indexOf(params.name), 1);
  }
  emit('update:value', updateValue);
};
</script>

<template>
  <div v-for="option in props.options" :key="option.id">
    <Checkbox
      :name="name"
      :label="option.name"
      :id="option.id"
      :value="option.name"
      :checked="value.includes(option.id)"
      group
      @updateCheckboxGroup="check"
    />
  </div>
</template>

<style lang="scss" scoped></style>
