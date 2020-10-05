<template>
  <div class="search">
    <p class="control has-icons-left">
      <input v-model="kappa" class="input" type="text" placeholder="Search" @keydown="search"/>
      <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true" />
        </span>
    </p>
  </div>
</template>

<script lang="ts">

export default {
   setup(){
     const kappa = ""
     const search = () =>{

     }
     return{
       kappa,
       search,
     }
   }
}
</script>

<style scoped>

</style>