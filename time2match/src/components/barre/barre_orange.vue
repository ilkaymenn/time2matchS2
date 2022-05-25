<template>

  <figure>
    
    <img class="top-0 " :src="image" alt="Barre Orange " />

    <figcaption
      class=" "
    >
     </figcaption>
  </figure>

</template>

<script> 

export default {
  name:'AccueilView',
  data(){
    return {

    }
  },
  props:{

      image: {
        type : String,
        default: "/public/Img/barreo.svg"},
  },
};

</script>