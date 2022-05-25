<template>

  <figure>
    
    <img :src="image" alt="barre Orange " />

    <figcaption
     
    >
     </figcaption>
  </figure>


</template>

<script> 

export default {
  
  props:{

      image: {
        type : String,
        default: "/public/Img/barreo.svg"},
  
}
}
</script>