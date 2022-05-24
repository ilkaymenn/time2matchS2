<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <div class="container bg-Noirr">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                          <div class="navbar-brand bg-Orangee flex place-content-between">
                            
                            <RouterLink to="/">Accueill</RouterLink>
                            <RouterLink to="/terrains">Terrains</RouterLink>
                            <RouterLink to="/parties">Parties</RouterLink>
                            <RouterLink to="/sports">Sports</RouterLink>
                            <RouterLink to="/partenaires">Partenaires</RouterLink>
                            <RouterLink to="/apropos">À Propos</RouterLink>
                            <RouterLink to="/mentionslegaless">Mentions Légales</RouterLink>
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
