<template>
  <div :class="active ? 'endMyLifeActive' : 'endMyLife'">
    <div class="head">
      <a @click="close"><i class="fas fa-times"/></a>
      <h2>{{ country }}</h2>
    </div>
    <div class="block">
      <p>Population: {{ population }}</p>
      <p>Another fun fact: No fun allowed</p>
      <p>Final fun fact: https://youtu.be/wHrAwtMjTTk?t=105</p>
    </div>
    <div class="search">
      <p class="control has-icons-left">
        <input
          v-model="searchText"
          class="input"
          type="text"
          placeholder="Search"
          @keyup="search"
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
    <div class="banditems" v-if="!state.haettu">
      <Banditem
        v-for="band in bandTest"
        :key="band.id"
        :band="band"
        @pass-details="openDetails"
      />
    </div>
    <div class="banditems" v-if="state.haettu">
      <Banditem
        v-for="band in filteredBands"
        :key="band.id"
        :band="band"
        @pass-details="openDetails"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Banditem from "@/components/Banditem.vue";

import { ref, reactive, onBeforeUpdate,watch} from "vue";
import {getBandsCountry} from "@/BandiApi";

export default {
  components: {
    Banditem
  },
  emits: ["side-active", "open-details"],
  props: {
    active: {
      type: Boolean
    },
    population: {
      type: Number
    },
    country: {
      type: String
    }
  },


  setup(props: any, { emit }: any) {
    const searchText = ref("");
    const state = reactive({
      haettu: false
    });
    const bandTest: {
      id: number;
      link: string;
      name: string;
      country: string;
      genre: string;
      status: string;
    }[] = reactive([]);
    watch(()=> props.country,(value, oldValue) => {
      bandTest.splice(0, bandTest.length);
      getBandsCountry(value).then(data =>{
        for(const band of data){
          bandTest.push(band)
        }

      }).catch(err => console.log(err.message))
    })
    const filteredBands: {
      id: number;
      link: string;
      name: string;
      country: string;
      genre: string;
      status: string;
    }[] = reactive([]);

    const search = () => {
      state.haettu = searchText.value.length > 0 ? true : false;
      filteredBands.splice(0, filteredBands.length);
      bandTest.filter(b => {
        if (b.name.toLowerCase().match(searchText.value.toLowerCase())) {
          filteredBands.push(b);
        }
      });
      return filteredBands;
    };

    const close = () => {
      emit("side-active");
    };
    const openDetails = (x: Record<string, any>) => {
      emit("open-details", x);
    };
    return {
      close,
      searchText,
      search,
      filteredBands,
      state,
      openDetails,
      bandTest
    };
  }
};
</script>

<style scoped>
.endMyLife {
  position: fixed;
  height: 100vh;
  width: 25vw;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(-25vw);
  transform: translateX(-25vw);
  overflow: auto;
}
.endMyLifeActive {
  position: fixed;
  height: 100vh;
  width: 20vw;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(0vw);
  transform: translateX(0vw);
  overflow: auto;
}

.head {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
  color: white;
  opacity: 0.9;
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
  margin-top: 2vh;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 2vh;
}
</style>
