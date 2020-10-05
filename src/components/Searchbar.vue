<template>
  <div class="search">
    <p class="control has-icons-left">
      <input v-model="kappa" class="input" type="text" placeholder="Search" @keyup="search"/>
      <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true" />
        </span>
    </p>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
   setup(){
     const kappa = ref("");


    function search(){

       if(kappa.value.length>=3) console.log(kappa.value)
    }

     return{
       kappa,
       search
     }
   }
}
</script>

<style scoped>

</style>