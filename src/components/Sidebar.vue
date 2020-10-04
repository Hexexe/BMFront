<template>
  <div :class="active ? 'endMyLifeActive' : 'endMyLife'">
    <nav class="panel">
      <p class="panel-heading">
        Repositories
        <button @click="close">kys</button>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <div>
        <Banditem />
      </div>
    </nav>
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
</style>
