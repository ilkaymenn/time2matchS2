<template >
<div class="bg-Noirr">

  <entete/>

  <div>
    <div class="flex  justify-between -z-50">
       <barre_blanche />

       <user class="  m-5 mt-7" />
     </div>  

    <div class="flex justify-end">
      <barre_orange />
    </div>
  </div>

  


  
  

  
 

  

  
  

</div>


</template>

<script> 
import barre_blanche from '../components/barre/barre_blanche.vue';
import barre_orange from '../components/barre/barre_orange.vue';
import user from '../components/user/user.vue';




export default {
  components: { barre_blanche, barre_orange, user },
  name:'AccueilView',
  data(){
    return {

    }
  },
  
};

</script>