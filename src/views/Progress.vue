<script setup>
import { ref } from 'vue';
import ProgressBar from '@/components/Progress/ProgressBar.vue';
import Button from '@/components/Button.vue';
import ProgressCircle from '@/components/Progress/ProgressCircle.vue';

const barPercent = ref(40);
const circlePercent = ref(60);

const addBarPercent = () => {
  barPercent.value += 10;
  if (barPercent.value > 100) {
    barPercent.value = 100;
  }
};

const addCirclePercent = () => {
  circlePercent.value += 10;
  if (circlePercent.value > 100) {
    circlePercent.value = 100;
  }
};
</script>
<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="barPercent" color="danger" />
    <Button label="Add 10%" @click="addBarPercent" />
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="circlePercent" color="warning"/>
    <Button label="Add 10%" @click="addCirclePercent" />
  </div>
</template>
