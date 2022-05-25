<template>
<div>
  <barre_blanche />;

  <barre_orange/>;
  

</div>
</template>

<script> 
import barre_blanche from '../components/barre/barre_blanche.vue';
import barre_orange from '../components/barre/barre_orange.vue';




export default {
  components: { barre_blanche, barre_orange },
  name:'AccueilView',
  data(){
    return {

    }
  },
  
};

</script>