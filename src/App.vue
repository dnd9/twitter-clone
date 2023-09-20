<script setup>
import Sidebar from './components/sidebar.vue'
import Post from './components/posts.vue'
import trends from './components/trends.vue'
import './assets/main.css'
</script>
<template>
  <div class = "flex container h-screen w-full ">
    <div class = "lg:w-1/5  flex flex-col justify-between ">
    <sidebar>
      <Sidebar />
    </sidebar>
  </div>
  
  <div class="lg:w-1/2 h-full border-lightest border-r lg:block">
    <post>
        <Post/>
    </Post>
  </div>
  <div class="hidden lg:block lg:w-1/3 h-full border-l border-lighter py-2 px-6 relative">
  <trends>
    <trends/>
  </trends>
  </div>
  </div>

</template>


