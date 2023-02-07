<script setup>
import Header from './components/layout/Header.vue';
import Sidebar from './components/layout/Sidebar.vue';
import { ref, computed } from 'vue';

const sideBarOpen = ref(true);

const toggleSideBar = () => {
  sideBarOpen.value = !sideBarOpen.value;
};

const open = '\u1405';
const close = '\u140A';

const sideBarToggleIcon = computed(() => {
  return sideBarOpen.value ? close : open;
});
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleSideBar">
      {{ sideBarToggleIcon }}
    </div>
    <Header />
    <Sidebar :sidebarOpen="sideBarOpen" />
    <div :class="['content', { content_full: !sideBarOpen }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/global.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
    transition: 0.5s;
  }
}
.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary-hover);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
