<template>
  <div :class="active ? 'endMyLifeActive' : 'endMyLife'">
    <div class="head">
      <a @click="close"><i class="fas fa-times"/></a>
      <h2>FINLAND</h2>
    </div>
    <div class="block">
      <p>Fun fact: Kys</p>
      <p>Another fun fact: No fun allowed</p>
      <p>Final fun fact:</p>
    </div>
    <div class="search">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
    <div v-for="i in 20" :key="i">
      <Banditem />
    </div>
  </div>
</template>

<script lang="ts">
import Banditem from "@/components/Banditem.vue";
export default {
  components: {
    Banditem
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
  height: 100%;
  width: 20vw;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(-20vw);
  transform: translateX(-20vw);
}
.endMyLifeActive {
  position: fixed;
  height: 100%;
  width: 20vw;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(0vw);
  transform: translateX(0vw);
}

.head {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
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
  margin-top: 5px;
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
