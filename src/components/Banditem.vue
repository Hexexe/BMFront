<template>
  <div class="containerlol" @click="sendDetails">
    <div class="textcontainer">
      <h1>{{ band.name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
//import { onMounted } from "vue";

export default {
  props: ["band"],
  emits: ["pass-details"],
  setup(props: any, { emit }: any) {
    const eiii = reactive(props.band);
    const showpng = ref(false);
    const showgif = ref(false);
    const noimage = ref(false);
    const kys = eiii.link.match(/\d+$/).toString();
    const logo = [...kys].splice(0, 4).join("/") + "/" + kys;
    const imgSrcJpg = `https://www.metal-archives.com/images/${logo}_logo.jpg`;
    const imgSrcPng = `https://www.metal-archives.com/images/${logo}_logo.png`;
    const imgSrcGif = `https://www.metal-archives.com/images/${logo}_logo.gif`;

    const sendDetails = () => {
      const x = props.band;
      emit("pass-details", x);
    };
    return {
      sendDetails,
      kys,
      imgSrcJpg,
      imgSrcGif,
      imgSrcPng,
      showpng,
      showgif,
      noimage
    };
  }
};
</script>

<style scoped>
.containerlol {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: auto;
  height: 10vh; /* Tätä voi muokkailla sitte mielensä mukaan vaikka "10 tai 15vh" näyttää auto:llakin ihan jees*/
  margin-top: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
  border: solid;
  border-radius: 2px;
  cursor: pointer;
  opacity: 0.5;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-overflow: ellipsis;
}
.containerlol:hover {
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.imagecontainer {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.textcontainer {
  font-size: 20px;
  color: white;
}
</style>
