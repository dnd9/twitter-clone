
<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'

import {ref} from 'vue';
// import { VIcon } from 'vue3-icon';
const tabs= ref([
  { icon: 'fas fa-home', title: 'Home', id: 'home' },
  { icon: 'fas fa-search', title: 'Explore', id: 'explore' },
  { icon: 'far fa-bell', title: 'Notifications', id: 'notifications' },
  { icon: 'far fa-envelope', title: 'Messages', id: 'messages' },
  { icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists' },
  { icon: 'fas fa-users', title: 'communities', id: 'communities'},
  { icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks' },
  { icon: 'fas fa-user', title: 'Profile', id: 'profile' },
  { icon: 'fas fa-ellipsis-h', title: 'More', id: 'more' }
  
]);
const id = ref('home');
const dropdown = ref(false)
const toggleDropdown = () => {
  dropdown.value = !dropdown.value;
};
</script>

<template>
  <div class=" overflow-y-scroll lpx-2 lg:px-6 py-2">
  <div>
    <button class="h-12 w-12  hover:bg-lightblue text-3xl rounded-full text-darkblue">
        <i class="fab fa-twitter"></i>
    </button>
    <button v-for="tab in tabs" :key="tab.id" @click="id = tab.id" :class = "{'flex items-center py-2 px-4 hover:bg-lightblue hover:text-blue rounded-full mr-auto mr-3': true, 'text-blue': id===tab.id}" >
      <i :class="tab.icon " class = "text-2xl mr-4 text-left"></i>
      <p class="text-lg font-semibold hidden lg:block text-left">{{ tab.title }}</p>
    </button>
    <button class="text-white bg-blue rounded-full w-12 h-12 lg:h-auto lg:w-full p-3 font-semibold">
      <p class = "hidden lg:block">Post</p>
      <i class = "fas fa-plus lg:hidden"></i>
    </button>
  </div>

    <div class="lg:w-full relative ">
      <button  @click ="toggleDropdown" class="flex items-center w-full hover:bg-lightblue rounded-full p-2 " >
        <img src="../assets/maze.jpg" class="w-10 h-10 rounded-full border-lightest ">
        <div class="hidden lg:block ml-4">
          <p class=" text-sm font-bold leading-tight">Namanya</p>
          <p class=" text-sm leading-tight">@Namanya</p>
        </div>
        <i class="fas fa-angle-down ml-auto hidden lg:block text-lg"></i>
      </button>
      <div v-if="dropdown === true" class = "absolute bottom-0 left-0 right-0 w-54 rounded-lg border-lighest bg-white mb-6">
        <button @click="dropdown=false" class="flex items-center w-full hover:bg-lightblue rounded-full p-3" >
        <img src="../assets/maze.jpg" class="w-10 h-10 rounded-full border-lightest ">
        <div class="ml-4">
          <p class=" text-sm font-bold leading-tight">Namanya</p>
          <p class=" text-sm leading-tight">@maze</p>
        </div>
        <i class="fas fa-check ml-auto text-blue"></i>
      </button>
      <button @click="dropdown=false" class = "border-t border-lighest hover:bg-lighest w-full text-left p-3 text-sm">
        Add existing account
      </button>
      <button @click="dropdown=false" class = "border-t border-lighest hover:bg-lighest w-full text-left p-3 text-sm">
        logout @Namanya
      </button>
      </div>
    </div>
  </div>

</template>
 
