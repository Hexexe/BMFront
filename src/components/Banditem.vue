<template>
  <div class="kys">
    <a class="banditem" @click="openDetails">
      <div>
        <img v-if="!showpng" :src="imgSrcJpg" @error="showpng = true" />
        <img v-if="showpng && !showgif" :src="imgSrcPng" @error="showgif =true" />
        <img v-if="showgif && !noimage" :src="imgSrcGif" @error="noimage = true" />
      </div>
      <div>
        <h1>{{ band.name }}</h1>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { reactive,ref } from "vue";
//import { onMounted } from "vue";

export default {
  props: ["band"],
  setup(props: any) {
    const eiii = reactive(props.band);
    const showpng = ref(false);
    const showgif = ref(false);
    const noimage = ref(false);
    const kys = eiii.link.match(/\d+$/).toString();
    const logo = [...kys].splice(0, 4).join("/") + "/" + kys;
    const imgSrcJpg = `https://www.metal-archives.com/images/${logo}_logo.jpg`;
    const imgSrcPng = `https://www.metal-archives.com/images/${logo}_logo.png`;
    const imgSrcGif = `https://www.metal-archives.com/images/${logo}_logo.gif`;

    const openDetails = () => {
      console.log(eiii.link);

    };
    return { openDetails, kys, imgSrcJpg, imgSrcGif,imgSrcPng,showpng,showgif,noimage };
  }
};
</script>

<style scoped>
.kys {
  margin-left: 1vw;
  margin-right: 1vw;
}
.banditem {
  display: flex;
  align-items: center;
  margin-top: 1vh;
}
.banditem > div {
  flex-basis: 50%;
}
h1 {
  font-size: 20px;
  width: 10vw;
  text-overflow: ellipsis;
  word-break: normal;
  overflow: hidden;
}
img {
  display: flex;
  max-width: auto;
  height: auto;
}
a {
  color: white;
  opacity: 0.5;
}
a:hover {
  color: black;
  background: white;
  opacity: 1;
}
</style>