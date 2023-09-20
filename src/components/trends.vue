<script setup>

import {ref} from 'vue'

const trends = ref([
    {top:'Trending in kampala', title: 'Museveni', bottom:'Trending with Kiiza'},
    {top:'Music', title: 'Am all way out', bottom:'124k posts'},
    {top:'Trending in kampala', title: 'Biyinzika', bottom:'48k posts'},
    {top:'Only on Twitter', title: '#CindyVsSheebah', bottom:'1,951 posts'},
    {top:'Trending in Uganda', title: 'Boda', bottom:'2088 posts'},
]);

</script>

<template>
  <div class="" >
    <input class=" pl-10 rounded-full w-full p-2 bg-lightest hover:bg-lighter" placeholder="search"/>
    <i class="fas fa-search absolute left-0 top-0 ml-12 mt-5 text-sm text-light"></i>

    <div  class = "w-full rounded-lg bg-lightest mt-4 leading-tight">
        <div class="p-4">
        <p class="font-bold"> Subscribe to Premium</p>
        <p class="my-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button class="text-white font-semibold rounded-full bg-black py-2 px-4 my-2">subscribe</button>
        </div>
    </div>
    

    <div class="w-full rounded-lg bg-lightest mt-8 justify-between">
        <div  class="flex items-center justify-between p-3">
            <p class="text-lg font-bold hidden lg:block"> Trends for you</p>
            <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for ="trend in trends" class="w-full flex justify-between  p-3 border-t border-lightest hover:bg-lighter">
            <div>
                <p class=" text-sm text-left leading-tight text-dark">{{ trend.top }}</p>
                <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
                <p class="text-left leading-tight text-dar">{{ trend.bottom }}</p>
            </div>
            <i class="fas fa-angle-down text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left border-t border-lighter">
            show more
        </button>
    </div>
  </div> 
</template>