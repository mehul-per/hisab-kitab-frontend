<template>
  <v-app>
    <div class="btnDiv">
      <v-btn color="primary">M - 1</v-btn>
      <v-btn color="primary">M - 2</v-btn>
      <v-btn color="primary">M - 3</v-btn>
      <v-btn color="primary">M - 4</v-btn>
      

    </div>
    <Home></Home>


  </v-app>
</template>

<style>
.btnDiv{
  display: flex;
  flex-direction: row;
  gap: 4%;
  justify-content: center;
}


</style>
<script>

import Home from "./sections/Home.vue"
export default {
  name: "App",
    components:{
      Home
    },



  computed: {
   

  },

  methods: {
   
  },
};
</script>
