<script setup>
// import GridLoader from 'vue-spinner/src/GridLoader.vue';
// import { useAppStore } from '@/stores/controller/app';
import { computed } from 'vue';
// import NavBar from "@/components/NavBar.vue";

// const appStore = useAppStore();
const loading = computed(() => appStore.loading);

</script>

<template>
    <div class="app">
      <router-view v-slot="{ Component, route }">
  
        <NavBar v-if="route.path !== '/'" />
  
        <transition :name="route.meta.transition">
          <component :is="Component" :key="route.path" />
        </transition>
  
      </router-view>
    </div>
  </template>
  
  <style scoped>

  </style>
  