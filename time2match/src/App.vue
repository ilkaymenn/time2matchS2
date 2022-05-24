<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoPartie from './components/menu/logo-partie.vue';
import LogoPartenaires from './components/menu/logo-partenaires.vue';
import LogoTerrain from './components/menu/logo-terrain.vue';
import LogoSports from './components/menu/logo-sports.vue';
import LogoSeco from './components/menu/logo-seco.vue';


</script>

<template>
    <div class="container bg-Noirr text-Blancc">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                          <div class="navbar-brand bg-Orangee flex place-content-between">
                            
                            <Logo class="px-2"  />
                            <LogoTerrain class="px-2" to="/terrains" />
                            <LogoPartie class="px-2" />
                            <LogoSports class="px-2" />
                            <LogoPartenaires class="px-2" />
                            <LogoSeco class="px-2" />
                            
                            <RouterLink to="/">Accueill</RouterLink>
                            <RouterLink to="/terrains">Terrains</RouterLink>
                            <RouterLink to="/parties">Parties</RouterLink>
                            <RouterLink to="/sports">Sports</RouterLink>
                            <RouterLink to="/partenaires">Partenaires</RouterLink>
                            <RouterLink to="/apropos">À propos</RouterLink>
                            <RouterLink to="/mentionslegales">Mentions Légales</RouterLink>
                            <RouterLink to="/pageco">Page Connection</RouterLink>
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
      
    </div>
</template>




<style>
@import './assets/styles.css';
</style>
