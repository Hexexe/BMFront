<template>
  <div :class="activeModal ? 'bandinfoActive' : 'bandinfoDeactive'">
    <div class="x">
      <h1 v-if="band">{{ band.name }}</h1>
      <a @click="close"><i>X</i> </a>
    </div>
    <div class="containerlol" v-if="band">
      <div class="leftC">
        <h1>Genre: {{ band.genre }}</h1>
        <h1>Status: {{ band.status }}</h1>
        <h1>Formed: {{ formed }}</h1>
        <h1>Years Active: {{ yearsA }}</h1>
        <h1>Location: {{ location }}</h1>
        <h1>Country: {{ band.country }}</h1>
        <h1>
          View on:
          <a :href="band.link" target="_blank">Metal-archives</a>
        </h1>
      </div>
      <div class="rightC">
        <div v-if="band" class="logo">
          <div v-if="loading" class="loader">Loading...</div>
          <img v-if="imgLogo !== null" :src="imgLogo" @load="test" />
          <img v-if="imgPhoto !== null" :src="imgPhoto" @load="test" />
        </div>
      </div>
    </div>
    <div class="discography">
      <h1>Discography:</h1>
      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        class="display discog"
      >
        <thead>
          <tr>
            <th class="releaseCol">Name</th>
            <th class="typeCol">Type</th>
            <th class="yearCol">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="album in albums" :key="album.index">
            <td>
              <a :href="album.link" target="_blank">
                {{ album.name }}
              </a>
            </td>
            <td>
              {{ album.type }}
            </td>
            <td>
              {{ album.year }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { yoinkData } from "../controllers/dataController";
export default {
  props: ["band", "activeModal"],
  emits: ["modal-active"],
  setup(props: any, { emit }: any) {
    const imgLogo: any = ref(null);
    const imgPhoto: any = ref(null);
    const formed: any = ref(null);
    const yearsA = ref(null);
    const location = ref(null);
    const loading = ref(false);
    const albums: any = ref([]);

    const getData = async () => {
      const kys = props.band.link;
      const values = await yoinkData(kys);
      return values;
    };

    watch(
      () => (props.activeModal, props.band),
      value => {
        if (value) {
          imgLogo.value = null;
          imgPhoto.value = null;
          formed.value = null;
          yearsA.value = null;
          location.value = null;
          albums.value = null;
          getData().then(d => {
            d.logo !== undefined
              ? (imgLogo.value = d.logo)
              : (imgLogo.value = require("@/assets/no-image-1.png"));
            d.photo !== undefined
              ? (imgPhoto.value = d.photo)
              : (imgPhoto.value = require("@/assets/no-image-1.png"));
            d.formYear !== undefined ? (formed.value = d.formYear) : null;
            d.yearsActive !== undefined ? (yearsA.value = d.yearsActive) : null;
            d.location !== undefined ? (location.value = d.location) : null;
            d.albums !== undefined ? (albums.value = d.albums) : null;
          });
          loading.value = true;
        }
      }
    );
    const close = () => {
      emit("modal-active");
    };
    const test = () => {
      loading.value = false;
    };
    return {
      close,
      getData,
      imgLogo,
      imgPhoto,
      test,
      loading,
      formed,
      yearsA,
      location,
      albums
    };
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
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.logo > img {
  width: auto;
  max-height: 150px;
}
.discography {
  overflow: auto;
  max-height: 200px;
  color: gray;
  border: solid;
}
.discography > h1 {
  font-size: 20px;
}

.bandinfoActive {
  z-index: 2;
  position: fixed;
  top: 15%;
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
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: translateY(-150vh);
  transform: translateY(-150vh);
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
