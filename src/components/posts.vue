<script setup>
import {ref} from 'vue'
const following = ref([
  {src:"../src/assets/elon.jpg",  name:'Elon Musk', handle:'@elonmusk', time:'Sep 17', tweet:'How did most of the legacy media go from superheroes of free speech to supervillains of speech suppression?', comments:'200',retweets:'300', likes:
'12k' },
{src:"/src/assets/james.jpg",  name:'James Onen - FATBOY', handle:'@jamesonen', time:'Sep 17', tweet:'When your wife brings home UGX.100,000,000 for just one night\'s work, you must treat her with respect.', comments:'200',retweets:'300', likes:
'12k' },
{src:"../src/assets/jonah.jpg",  name:'𝗞𝗶𝗻𝗴𝗷𝗼𝗻𝗮𝗵🌴🥥', handle:'@_kingjonah', time:'Sep 18', tweet:'So this guy’s girlfriend sent a page on X(twitter) to test her boyfriend and this happened, nothing in this world would prepare you for the ending 🤭', comments:'200',retweets:'300', likes:
'12k' },
{src:"../src/assets/fred.jpg",  name:'Eng Fred Nshemereirwe.', handle:'@FredNshemereirw', time:'20 min', tweet:'Nebosh Level6/BSc/Diploma in safety Engineering, @Neboshtweets IGC, Nebosh Oil & Gas, Grad @IOSH_tweets, First aid & fire fighting certified.', comments:'200',retweets:'300', likes:
'12k' }
]);

const posts = ref(['it is so nice outside'])
const inputData = ref('');

const post = ()=>{
 const tweet =  inputData.value;
  posts.value.push(tweet)

  //clearing input field
  inputData.value = '';
}

</script>

<template>
  <div class="flex items-center px-5 py-3 justify-between">
      <h1 class="text-xl font-bold">Home</h1>
      <!-- <i class="far fa-star text-blue text-xl"></i> -->
  </div>
  <div class = "w-full  border-b border-lighter">
  <div class="flex border-lighter text-light">
      <button class=" hover:bg-lighter h-12">
        <h1 class="text-xl font-semibold lg:px-24 mx-4">For you</h1>
      </button>
      <button class=" hover:bg-lighter h-12">
        <h1 class="text-xl font-semibold lg:px-24 mx-4">following</h1>
      </button>
   
  </div>
  </div>
    
    <div class="px-5 py-4 border-b-8 border-lighter flex " >
      <div class="">
        <img src="../assets/maze.jpg" class=" flex-none border w-12 h-12 rounded-full border-lightest"/>
      </div>
      <form v-on:submit.prevent="post" class="w-full px-4 relative">
        <textarea v-model="inputData" class="w-full focus:outline-none mt-3 pb-3" placeholder="what's up?"/>
        <div class="flex items-center">
          <i class="text-blue text-lg mr-4 far fa-image"></i>
          <i class="text-blue text-lg mr-4 fas fa-film"></i>
          <i class="text-blue text-lg mr-4 far fa-chart-bar"></i>
          <i class="text-blue text-lg mr-4 far fa-smile"></i>
        </div>
        <button type = "submit"  class="h-10 px-4 text-white font-semibold hover:bg-darkblue focus:outline-none absolute rounded-full bg-blue bottom-0 right-0"> Post</button>
      </form>
  </div>
  <div v-for="post in posts" class="w-full p-4 border-b hover:bg-lighter flex">
    <div class="flex-none mr-4">
      <img src="../assets/maze.jpg" class="flex-none h-12 w-12 rounded-full">
    </div>
    <div class="w-full">
    <div class="flex items-center w-full">
        <p class="font-semibold">Namanya</p>
        <p class="text-sm  text-dark ml-2">@maze</p>
        <p class="text-sm  text-dark ml-2">1 sec...</p>
        <i class="fas fa-angle-down text-dark ml-auto"></i>
      </div >
      <p class="py-2"> {{post}} </p>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center text-sm text-dark">
          <i class="far fa-comment mr-3"></i>
          <p> 344</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="fas fa-retweet mr-3"></i>
          <p>200k </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="far fa-heart mr-3"></i>
          <p>111k </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="fas fa-share-square mr-3"></i>
        </div>
      </div>
      </div>
      </div>
  <div v-for = "follow in following" class="w-full p-4 border-b hover:bg-lighter flex">
    <div class="flex-none mr-4">
      <img :src="follow.src" class="flex-none h-12 w-12 rounded-full">
    </div>
    <div class="w-full">
      <div class="flex items-center w-full">
        <p class="font-semibold">{{ follow.name }}</p>
        <p class="text-sm  text-dark ml-2">{{ follow.handle }}</p>
        <p class="text-sm  text-dark ml-2">{{ follow.time }}</p>
        <i class="fas fa-angle-down text-dark ml-auto"></i>
      </div >
     
      <p class="py-2">{{ follow.tweet }}</p>
      
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center text-sm text-dark">
          <i class="far fa-comment mr-3"></i>
          <p>{{ follow.comments }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="fas fa-retweet mr-3"></i>
          <p>{{ follow.retweets }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="far fa-heart mr-3"></i>
          <p>{{ follow.likes }}</p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <i class="fas fa-share-square mr-3"></i>
        </div>
      </div>
    </div>
  </div>
</template>

