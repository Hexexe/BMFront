<template>
  <div :class="activeModal ? 'bandinfoActive' : 'bandinfoDeactive'">
    <div class="x">
      <a @click="close"><i class="fas fa-times "/></a>
    </div>
    <div class="head">
      <h1 v-if="band">{{ band.name }}</h1>
    </div>
    <br />
    <div class="containerlol" v-if="band">
      <div class="leftC">
        <h1>Country: {{ band.country }}</h1>
        <h1>Genre: {{ band.genre }}</h1>
        <h1>
          Link:
          <a :href="band.link" target="_blank">here </a>
        </h1>
        <h1>Status: {{ band.status }}</h1>
      </div>
      <div class="rightC">
        <div v-if="band" class="logo">
          <img v-if="!showpng" :src="getJpg()" @error="showpng = true" />
          <img
            v-if="showpng && !showgif"
            :src="getPng()"
            @error="showgif = true"
          />
          <img
            v-if="showgif && !noimage"
            :src="getGif()"
            @error="noimage = true"
          />
          <img
            v-if="noimage"
            :src="
              'https://www.streamscheme.com/wp-content/uploads/2020/04/feelsbadman.png'
            "
          />
        </div>
      </div>

      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: ["band", "activeModal"],
  emits: ["modal-active"],
  setup(props: any, { emit }: any) {
    const showpng = ref(false);
    const showgif = ref(false);
    const noimage = ref(false);

    const buildLink = () => {
      const kys = props.band.link.match(/\d+$/).toString();
      const logo = [...kys].splice(0, 4).join("/") + "/" + kys;
      return logo;
    };
    const getJpg = () => {
      return `https://www.metal-archives.com/images/${buildLink()}_logo.jpg`;
    };
    const getPng = () => {
      return `https://www.metal-archives.com/images/${buildLink()}_logo.png`;
    };
    const getGif = () => {
      return `https://www.metal-archives.com/images/${buildLink()}_logo.gif`;
    };
    const close = () => {
      emit("modal-active");
      showpng.value = false;
      showgif.value = false;
      noimage.value = false;
    };
    return { close, getJpg, getPng, getGif, showpng, showgif, noimage };
  }
};
</script>

<style scoped>
.x {
  display: flex;
  justify-content: right;
  font-size: 30px;
  text-align: center;
  color: white;
  width: 100%;
  opacity: 0.9;
}
.head {
  display: flex;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  color: white;
  width: 100%;
  opacity: 0.7;
}
.containerlol {
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: row nowrap;
}
.leftC {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
}
.rightC {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.logo {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: green;
}
.bandinfoActive {
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: fixed;
  top: 30%;
  right: 45vw;
  left: 35vw;
  width: 35%;
  height: 50%;
  background: black;
  opacity: 0.9;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: translateY(0vw);
  transform: translateY(0vw);
}
.bandinfoDeactive {
  display: flex;
  z-index: 2;
  position: fixed;
  top: 30%;
  right: 45vw;
  left: 35vw;
  width: 35%;
  height: 50%;
  background: black;
  opacity: 0.9;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: translateY(-70vw);
  transform: translateY(-70vw);
}
</style>
