<template>
  <div id="home">


  <v-row>
    <v-col>

      <v-card>      
        <v-date-picker 
        full-width 
        v-model="fecha" 
        locale="es-CL" 
        :min="minimo"
        :max="maximo"
        @change="getDolar()"

        >
        </v-date-picker>
      </v-card>

      <v-card   color="error" dark>
          <v-card-text  class="display-1 text-center">{{valor}} </v-card-text>     
      </v-card>



    </v-col>
  </v-row>

  
  </div>


</template>

<script>

import axios from 'axios'
import store, { mapState, mapMutations } from 'vuex'


export default {
  
  
  data(){
    return{
      fecha:new Date().toISOString().substr(0, 10),
      minimo:"1984",
      maximo:new Date().toISOString().substr(0, 10),
      day:"",
      valor:100
    }
  },
  methods:{
    ...mapMutations(['loading']),
    async getDolar(){

          let element=this.fecha.split('-')
          element = element[2]+"-"+element[1]+"-"+element[0];
          
          this.loading()
          console.log(this.load)

          axios.get(`https://mindicador.cl/api/dolar/${element}`).then((response) => {
          if (response.data.serie.length !==0 ) {
            console.log(response.data.serie[0].valor)
            this.valor=response.data.serie[0].valor
          }else{
            this.valor = "No hay resultados"
          }
          
        }).catch(function (error) {
        //console.log(error);
        
      }).finally(() => {
        console.log("final")
          this.loading()
      })  
      
    }



  },
    computed:{
      ...mapState(["load"])
    }, 
    mounted(){
      
      this.getDolar();
    }

  
};
</script>
