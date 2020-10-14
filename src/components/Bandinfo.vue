<template>
  <div :class="activeModal ? 'bandinfoActive' : 'bandinfoDeactive'">
    <div class="x">
      <h1 v-if="band">{{ band.name }}</h1>
      <a @click="close"><i>X</i> </a>
    </div>
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
          <div v-if="loading" class="loader">
            Loading...
          </div>
          <img v-if="imgLink !== null" :src="imgLink" @load="test" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, reactive } from "vue";
import { yoinkImages } from "../bandi_api";
export default {
  props: ["band", "activeModal"],
  emits: ["modal-active"],
  setup(props: any, { emit }: any) {
    const imgLink = ref(null);
    const loading = ref(false);
    const getImage = () => {
      const kys = props.band.link.match(/\d+$/).toString();
      const logo = [...kys].splice(0, 4).join("/") + "/" + kys;
      const url = [
        `https://www.metal-archives.com/images/${logo}_logo.jpg`,
        `https://www.metal-archives.com/images/${logo}_logo.png`,
        `https://www.metal-archives.com/images/${logo}_logo.gif`
      ];
      return yoinkImages(url);
    };
    watch(
      () => (props.activeModal, props.band),
      value => {
        if (value) {
          imgLink.value = null;
          getImage().then(d => (imgLink.value = d));
          loading.value = true;
        }
      }
    );
    const close = () => {
      emit("modal-active");
    };
    const test = () => {
      console.log("done");
      loading.value = false;
    };
    return { close, getImage, imgLink, test, loading };
  }
};
</script>

<style scoped>
.containerlol {
  display: flex;
  border: solid;
  color: gray;
}
.x {
  padding: 5px;
  display: flex;
  font-size: 30px;
  color: gray;
  border: solid;
}
.x > a {
  position: fixed;
  margin-right: 1vw;
  right: 0;
  align-content: center;
  font-size: 30px;
  color: white;
  opacity: 0.5;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.x > a:hover {
  opacity: 1;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.leftC {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
}
.rightC {
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
}
.logo {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.bandinfoActive {
  z-index: 2;
  position: fixed;
  top: 30%;
  right: 45vw;
  left: 35vw;
  width: 35%;
  height: auto;
  background: black;
  opacity: 0.9;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: translateY(0vw);
  transform: translateY(0vw);
}
.bandinfoDeactive {
  z-index: 2;
  position: fixed;
  top: 30%;
  right: 45vw;
  left: 35vw;
  width: 35%;
  height: auto;
  background: black;
  opacity: 0.9;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: translateY(-70vw);
  transform: translateY(-70vw);
}

.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #000000;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
