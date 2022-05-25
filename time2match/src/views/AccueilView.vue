<template >
<div class="bg-Noirr">

  <entete/>

  <div>
    <barre_blanche />
  </div>
  

  <user/>
 

  

  <barre_orange class=" bg-indigo-800"/>
  

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