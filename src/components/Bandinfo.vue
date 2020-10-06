<template>
  <div :class="activeModal ? 'bandinfoActive' : 'bandinfoDeactive'">
    <a class="head" @click="close"><i class="fas fa-times "/></a>
    <div>
      <h1 v-if="band">Name: {{ band.name }}</h1>
      <h1 v-if="band">Country: {{ band.country }}</h1>
      <h1 v-if="band">Genre: {{ band.genre }}</h1>
      <h1 v-if="band">Link: {{ band.link }}</h1>
      <h1 v-if="band">Status: {{ band.status }}</h1>
      <h1>Photo:</h1>
      <img
        src="https://thumbs.gfycat.com/BiodegradableScientificGentoopenguin-size_restricted.gif"
        alt=""
      />
      <br />
      <a href="https://www.youtube.com/watch?v=-VBdAY8eA9w">good content</a>
      <h1>Saatte taiteilla tän vähä hienommaks</h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["band", "activeModal"],
  emits: ["modal-active"],
  setup(props: any, { emit }: any) {
    const close = () => {
      emit("modal-active");
    };
    return { close };
  }
};
</script>

<style scoped>
.head {
  display: flex;
  position: fixed;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
  color: white;
  opacity: 0.9;
  top: 2wh;
  right: 0.5vw;
}
.bandinfoActive {
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
