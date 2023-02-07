<script setup>
import { ref } from 'vue';

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    required: true
  }
});

const links = ref([
  { name: 'Button', href: '/vue-ui-kit/button' },
  { name: 'Checkbox', href: '/vue-ui-kit/checkbox' },
  { name: 'Input', href: '/vue-ui-kit/input' },
  { name: 'Progress', href: '/vue-ui-kit/progress' },
  { name: 'Radiobutton', href: '/vue-ui-kit/radiobutton' },
  { name: 'Tabs', href: '/vue-ui-kit/tabs' },
  { name: 'Typography', href: '/vue-ui-kit/typography' }
]);
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: props.sidebarOpen }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.5s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
    transition: 0.5s;
  }
  &__link {
    display: block;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary);
    }
  }
}
</style>
