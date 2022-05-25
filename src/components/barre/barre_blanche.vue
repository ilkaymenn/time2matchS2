<template>

  <figure>
    
    <img class="top-0 " :src="image" alt="Barre Blanche " />

    <figcaption
      class=" "
    >
     </figcaption>
  </figure>

</template>

<script> 

export default {
  
  props:{

      image: {
        type : String,
        default: "/public/Img/barreb.svg"},
  },
};

</script>