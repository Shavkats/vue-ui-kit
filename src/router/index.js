import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/vue-ui-kit',
      name: 'Index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/vue-ui-kit/typography',
      name: 'Typography',
      component: () => import('../views/Typography.vue')
    },
    {
      path: '/vue-ui-kit/button',
      name: 'Button',
      component: () => import('../views/Button.vue')
    },
    {
      path: '/vue-ui-kit/checkbox',
      name: 'Checkbox',
      component: () => import('../views/Checkbox.vue')
    },
    {
      path: '/vue-ui-kit/radiobutton',
      name: 'Radiobutton',
      component: () => import('../views/Radiobutton.vue')
    },
    {
      path: '/vue-ui-kit/progress',
      name: 'Progress',
      component: () => import('../views/Progress.vue')
    },
    {
      path: '/vue-ui-kit/input',
      name: 'Input',
      component: () => import('../views/Input.vue')
    },
    {
      path: '/vue-ui-kit/tabs',
      name: 'Tabs',
      component: () => import('../views/Tabs.vue')
    }
  ]
});

export default router;
