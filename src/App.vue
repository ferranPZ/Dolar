<template>



  <v-app>
    <v-container>
      <router-view/>
    </v-container>


     <v-overlay :value="load">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>


  </v-app>



</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
      loader:false,
  }),
  computed:{
      ...mapState(["load"])
    }
};
</script>
