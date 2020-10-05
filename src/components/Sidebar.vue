<template>
  <div :class="active ? 'endMyLifeActive' : 'endMyLife'">
    <div class="head">
      <a @click="close"><i class="fas fa-times"/></a>
      <h2>FINLAND</h2>
    </div>
    <div class="block">
      <p>Fun fact: Kys</p>
      <p>Another fun fact: No fun allowed</p>
      <p>Final fun fact: https://youtu.be/wHrAwtMjTTk?t=105</p>
    </div>
    <div class="search">
      <Searchbar></Searchbar>
    </div>
    <div class="banditems">
      <Banditem v-for="i in 20" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import Banditem from "@/components/Banditem.vue";
import Searchbar from "@/components/Searchbar.vue";
export default {
  components: {
    Banditem,
    Searchbar
  },
  emits: ["side-active"],
  props: {
    active: {
      type: Boolean
    }
  },
  setup(props: any, { emit }: any) {
    function close() {
      emit("side-active", EventSource);
    }
    return { close };
  }
};
</script>

<style scoped>
.endMyLife {
  position: fixed;
  height: 100vh;
  width: 20vw;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(-20vw);
  transform: translateX(-20vw);
  overflow: auto;
}
.endMyLifeActive {
  position: fixed;
  height: 100vh;
  width: 20vw;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(0vw);
  transform: translateX(0vw);
  overflow: auto;
}

.head {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
  color: white;
  opacity: 0.9;
}
.head a {
  font-size: 35px;
  text-align: right;
  margin-right: 1vw;
  color: white;
  opacity: 0.5;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.head a:hover {
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.block {
  text-align: center;
}
.search {
  margin-top: 2vh;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 2vh;
}
</style>
