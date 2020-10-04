<template>
  <div class="kys">
    <a class="banditem" @click="openDetails">
      <div class="img-col">
        <img
          src="https://www.metal-archives.com/images/3/0/4/0/30403_logo.jpg"
        />
      </div>
      <div class="text-col"><h1>Goatmoon</h1></div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const openDetails = () => {
      alert("kys");
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
  flex-basis: 45%;
}
h1 {
  font-size: 25px;
}
img {
  display: block;
  max-width: 100%;
  height: 60px;
}
a {
  color: white;
}
a:hover {
  color: black;
  background: white;
}
</style>
