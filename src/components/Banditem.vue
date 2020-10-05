<template>
  <div class="kys">
    <a class="banditem" @click="openDetails">
      <div>
        <img
          src="https://www.metal-archives.com/images/3/0/4/0/30403_logo.jpg"
        />
      </div>
      <div>
        <h1>{{ band.name }}</h1>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
//import { onMounted } from "vue";

export default {
  props: ["band"],
  setup(props: any) {
    const eiii = reactive(props.band);
    const openDetails = () => {
      const kys = eiii.link.match(/\d+$/);
      console.log(kys);
    };
    return { openDetails };
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