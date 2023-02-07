<script setup>
import { ref } from 'vue';
import Tabs from '../components/Tabs.vue';

const tabs = [
  { name: 'Angular', label: 'Angular' },
  { name: 'React', label: 'React' },
  { name: 'Svelte', label: 'Svelte' },
  { name: 'Vue', label: 'Vue' }
];

const selectedTab = ref('Angular');

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab" />
  <div v-if="selectedTab === 'Angular'">
    <p>Developed by: Google</p>
    <p>Open-source: Yes</p>
    <p>Licence: MIT Licence</p>
    <p>Released: September 2016</p>
    <p>
      Github repo:
      <a href="https://github.com/angular/angular"
        >https://github.com/angular/angular</a
      >
    </p>
    <p>
      Description: Angular is a development platform for building mobile and
      desktop web applications using Typescript/JavaScript and other languages.
    </p>
  </div>
  <div v-if="selectedTab === 'React'">
    <p>Developed by: Facebook</p>
    <p>Open-source: Yes</p>
    <p>Licence: MIT Licence</p>
    <p>Released: March 2013</p>
    <p>
      Github repo:
      <a href="https://github.com/facebook/react"
        >https://github.com/facebook/react</a
      >
    </p>
    <p>
      Description: React is a JavaScript library for building user interfaces.
    </p>
  </div>
  <div v-if="selectedTab === 'Svelte'">
    <p>Developed by: Rich Harris</p>
    <p>Open-source: Yes</p>
    <p>Licence: MIT Licence</p>
    <p>Released: November 2016</p>
    <p>
      Github repo:
      <a href="https://github.com/sveltejs/svelte"
        >https://github.com/sveltejs/svelte</a
      >
    </p>
    <p>
      Svelte is a new way to build web applications. It's a compiler that takes
      your declarative components and converts them into efficient JavaScript
      that surgically updates the DOM.
    </p>
  </div>
  <div v-if="selectedTab === 'Vue'">
    <p>Developed by: Evan You</p>
    <p>Open-source: Yes</p>
    <p>Licence: MIT Licence</p>
    <p>Released: February 2014</p>
    <p>
      Github repo:
      <a href="https://github.com/vuejs/vue">https://github.com/vuejs/vue</a>
    </p>
    <p>
      Vue.js is a progressive, incrementally-adoptable JavaScript framework for
      building UI on the web.
    </p>
  </div>
</template>
