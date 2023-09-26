<script setup>
import Sidebar from './components/Sidebar.vue';
</script>
<template>
  <div class="dark:bg-white">
    <Sidebar></Sidebar>
  <div name="slide-fade" mode="out-in">
      <router-view/> 
  </div>
  </div>
</template>
<style>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(2em);
    opacity: 0;
  }
</style>