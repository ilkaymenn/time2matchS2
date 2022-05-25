<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/menu/logo.vue';
import LogoPartie from './components/menu/logo-partie.vue';
import LogoPartenaires from './components/menu/logo-partenaires.vue';
import LogoTerrain from './components/menu/logo-terrain.vue';
import LogoSports from './components/menu/logo-sports.vue';
import LogoSeco from './components/menu/logo-seco.vue';
</script>


<template>
    <div class="container bg-Noirr text-Blancc">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0 bg-Orangee    ">
                          <div class="navbar-brand  flex  place-content-between  content-center items-center ">                    
                            <Logo class="px-2"  />
                            <LogoTerrain class="px-2" to="/terrains" />
                            <LogoPartie class="px-2" />
                            <LogoSports class="px-2" />
                            <LogoPartenaires class="px-2" />
                            <LogoSeco class="px-2"/>
                          </div>


                          <button class="navbar-toggler" 
                            type="button" data-toggle="collapse" 
                            data-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
      </nav>
      <RouterView />
      
      <footer>
      <div class="flex flex-col pt-4 lg:flex-row">
        <div class="mx-16 mb-8 mt-3 flex items-center">
          <Logo class="w-8 fill-indigo-500" />
        </div>
        <div class="mx-5 flex w-full gap-28 pb-16 lg:flex-col">
          <div
            class="flex flex-col gap-3 lg:w-full lg:flex-row lg:justify-around"
          >
            <div class="flex flex-col">
              <p class="text-base font-semibold uppercase">mentions légales</p>
            </div>
            <div class="flex flex-col">
              <p class="text-base font-semibold uppercase">à propos</p>
            </div>
            <div class="flex flex-col">
              <p class="text-base font-semibold uppercase">nous contacter</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          my-10
          flex flex-col
          items-center
          justify-center
          gap-2
          border-t border-t-indigo-100
          pt-10
          lg:flex-row
        "
      >
        <span class="text-xs text-gray-400"
          >2021 Estatery. All rights reserved</span
        >
        <span class="flex items-center gap-4">
          <insta class="w-4" />
          <fb class="w-4" />
          <twitter class="w-4" />
          <linkedin class="w-5" />
          
        </span>
      </div>
    </footer>
    </div>
</template>




<style>
@import './assets/styles.css';
</style>