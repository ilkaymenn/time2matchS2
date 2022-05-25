

<template>
    <div class=" ">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0 bg-Orangee    ">
                          <div class="navbar-brand  flex  place-content-between  content-center items-center ">

                            <RouterLink to="/">  <Logo class="px-4"  /> </RouterLink>
                            <RouterLink to="/terrains">   <LogoTerrain class="px-2" to="/terrains" /> </RouterLink>
                            <RouterLink to="/parties"> <LogoPartie class="px-2" /> </RouterLink>
                            <RouterLink to="/sports"> <LogoSports class="px-2" /> </RouterLink>
                            <RouterLink to="/partenaires"> <LogoPartenaires class="px-2" /> </RouterLink>
                            
                            <RouterLink to="/pageco">  <LogoSeco class="px-2" /> </RouterLink>
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

      <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0 bg-Orangee    ">
                          <div class="navbar-brand  flex  place-content-between  content-center items-center ">

                            
                            <RouterLink to="/apropos">À propos</RouterLink>
                            <RouterLink to="/mentionslegales">Mentions Légales</RouterLink>
                           
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

      </div>
      
      
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/menu/logo.vue';
import LogoPartie from './components/menu/logo-partie.vue';
import LogoPartenaires from './components/menu/logo-partenaires.vue';
import LogoTerrain from './components/menu/logo-terrain.vue';
import LogoSports from './components/menu/logo-sports.vue';
import LogoSeco from './components/menu/logo-seco.vue';


</script>


<style>
@import './assets/styles.css';
</style>
