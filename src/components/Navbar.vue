<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Navbar extends Vue {}
</script>

<style scoped></style>
