<template>
  <div :class="active ? 'endMyLifeActive' : 'endMyLife'">
    <div class="head">
      <a @click="close"><i class="fas fa-times"/></a>
      <h2>FINLAND</h2>
    </div>
    <div class="block">
      <p>Fun fact: Kys</p>
      <p>Another fun fact: No fun allowed</p>
      <p>Final fun fact: https://youtu.be/wHrAwtMjTTk?t=105</p>
    </div>
    <div class="search">
      <Searchbar></Searchbar>
    </div>
    <div class="banditems">
      <Banditem  v-for="band in bands" :key="band.id" :band="band" />
    </div>
  </div>
</template>

<script lang="ts">
import Banditem from "@/components/Banditem.vue";
import Searchbar from "@/components/Searchbar.vue";
export default {
  components: {
    Banditem,
    Searchbar
  },
  emits: ["side-active"],
  props: {
    active: {
      type: Boolean
    },

  },
  setup(props: any, { emit }: any) {
    const bands: {id: number,link: string, name: string, country: string, genre:string, status: string} [] =[
      {
        "id": 0,
        "link": "https://www.metal-archives.com/bands/0/3540384774",
        "name": "0",
        "country": "Iceland",
        "genre": "Depressive Black/Doom Metal",
        "status": "Active"
      },
      {
        "id": 1,
        "link": "https://www.metal-archives.com/bands/0_X_%C3%AD_S_T/3540304450",
        "name": "0 X Ã­ S T",
        "country": "Finland",
        "genre": "Blackened Doom Metal",
        "status": "Split-up"
      },
      {
        "id": 2,
        "link": "https://www.metal-archives.com/bands/0_Zone/3540398489",
        "name": "0 Zone",
        "country": "Greece",
        "genre": "Death/Thrash Metal",
        "status": "Active"
      },
      {
        "id": 3,
        "link": "https://www.metal-archives.com/bands/0-Nun/3540471393",
        "name": "0-Nun",
        "country": "Brazil",
        "genre": "Atmospheric Black Metal",
        "status": "Active"
      },
      {
        "id": 4,
        "link": "https://www.metal-archives.com/bands/01101111011101100110111001101001/3540434066",
        "name": "01101111011101100110111001101001",
        "country": "Argentina",
        "genre": "Brutal Death Metal",
        "status": "Active"
      },
      {
        "id": 5,
        "link": "https://www.metal-archives.com/bands/0N0/3540325569",
        "name": "0N0",
        "country": "Slovakia",
        "genre": "Experimental Industrial Doom/Death Metal",
        "status": "Active"
      },
      {
        "id": 6,
        "link": "https://www.metal-archives.com/bands/1_Shot_Kill/70401",
        "name": "1 Shot Kill",
        "country": "Australia",
        "genre": "Death/Groove Metal",
        "status": "On hold"
      },
      {
        "id": 7,
        "link": "https://www.metal-archives.com/bands/10_Kingdoms/66551",
        "name": "10 Kingdoms",
        "country": "United States",
        "genre": "Thrash/Heavy Metal",
        "status": "Changed name"
      },
      {
        "id": 8,
        "link": "https://www.metal-archives.com/bands/10%24_Head/93854",
        "name": "10$ Head",
        "country": "United Kingdom",
        "genre": "Death/Thrash Metal",
        "status": "Split-up"
      },
      {
        "id": 9,
        "link": "https://www.metal-archives.com/bands/10%2C000_Years/3540470669",
        "name": "10.000 Years",
        "country": "Sweden",
        "genre": "Stoner Metal",
        "status": "Active"
      },
      {
        "id": 10,
        "link": "https://www.metal-archives.com/bands/10-67_P.D.O.A./88666",
        "name": "10-67 P.D.O.A.",
        "country": "United States",
        "genre": "Heavy Metal",
        "status": "Active"
      },
      {
        "id": 11,
        "link": "https://www.metal-archives.com/bands/10.000_km%C2%B2_gegen_die_Zeit/3540395576",
        "name": "10.000 kmÂ² gegen die Zeit",
        "country": "Germany",
        "genre": "Stoner/Doom Metal/Rock",
        "status": "Active"
      },
      {
        "id": 12,
        "link": "https://www.metal-archives.com/bands/100_Dogmas/3540447570",
        "name": "100 Dogmas",
        "country": "Brazil",
        "genre": "Groove Metal/Hard Rock",
        "status": "Active"
      },
      {
        "id": 13,
        "link": "https://www.metal-archives.com/bands/100_Knives_Inside/3540260920",
        "name": "100 Knives Inside",
        "country": "Denmark",
        "genre": "Progressive Death Metal",
        "status": "Split-up"
      },
      {
        "id": 14,
        "link": "https://www.metal-archives.com/bands/100_Remords/3540474085",
        "name": "100 Remords",
        "country": "France",
        "genre": "Symphonic Power/Heavy Metal",
        "status": "Active"
      },
      {
        "id": 15,
        "link": "https://www.metal-archives.com/bands/100_Slain/3540266645",
        "name": "100 Slain",
        "country": "Spain",
        "genre": "Thrash Metal",
        "status": "Split-up"
      },
      {
        "id": 16,
        "link": "https://www.metal-archives.com/bands/100_Suns/87700",
        "name": "100 Suns",
        "country": "United States",
        "genre": "Death Metal",
        "status": "Active"
      },
      {
        "id": 17,
        "link": "https://www.metal-archives.com/bands/1000_A.D./81844",
        "name": "1000 A.D.",
        "country": "United States",
        "genre": "Drone/Sludge Metal",
        "status": "Changed name"
      },
      {
        "id": 18,
        "link": "https://www.metal-archives.com/bands/1000_Bombs/3540373729",
        "name": "1000 Bombs",
        "country": "Czechia",
        "genre": "Thrash Metal",
        "status": "Active"
      },
      {
        "id": 19,
        "link": "https://www.metal-archives.com/bands/1000_Funerals/3540326834",
        "name": "1000 Funerals",
        "country": "Iran",
        "genre": "Funeral Doom/Death Metal/Ambient",
        "status": "Split-up"
      },
      {
        "id": 20,
        "link": "https://www.metal-archives.com/bands/1000_Kadaveres/3540413759",
        "name": "1000 Kadaveres",
        "country": "Chile",
        "genre": "Brutal Death Metal/Goregrind",
        "status": "Active"
      },
      {
        "id": 21,
        "link": "https://www.metal-archives.com/bands/1000_Odios/122684",
        "name": "1000 Odios",
        "country": "Argentina",
        "genre": "Thrash/Melodic Death Metal",
        "status": "Active"
      },
      {
        "id": 22,
        "link": "https://www.metal-archives.com/bands/1000_Sins/112675",
        "name": "1000 Sins",
        "country": "United Kingdom",
        "genre": "Metalcore",
        "status": "Changed name"
      },
      {
        "id": 23,
        "link": "https://www.metal-archives.com/bands/1000_Vierges/129655",
        "name": "1000 Vierges",
        "country": "France",
        "genre": "Sludge/Doom Metal",
        "status": "Split-up"
      },
      {
        "id": 24,
        "link": "https://www.metal-archives.com/bands/1000_Yard_Stare/3540314400",
        "name": "1000 Yard Stare",
        "country": "United States",
        "genre": "Death/Groove Metal (early)",
        "status": ""
      },
      {
        "id": 25,
        "link": "https://www.metal-archives.com/bands/100000_Tonnen_Kruppstahl/3540313198",
        "name": "100000 Tonnen Kruppstahl",
        "country": "Germany",
        "genre": "Grindcore/Powerviolence (early) Sludge/Doom Metal (later)",
        "status": "Active"
      },
      {
        "id": 26,
        "link": "https://www.metal-archives.com/bands/1000Dead/3540425687",
        "name": "1000Dead",
        "country": "Greece",
        "genre": "Metalcore/Thrash/Groove Metal",
        "status": "Active"
      },
      {
        "id": 27,
        "link": "https://www.metal-archives.com/bands/1028/3540458508",
        "name": "1028",
        "country": "Ecuador",
        "genre": "Blackened Death Metal",
        "status": "Active"
      },
      {
        "id": 28,
        "link": "https://www.metal-archives.com/bands/107_Pasos/68859",
        "name": "107 Pasos",
        "country": "Colombia",
        "genre": "Heavy Metal",
        "status": "Active"
      },
      {
        "id": 29,
        "link": "https://www.metal-archives.com/bands/1080/38703",
        "name": "1080",
        "country": "United States",
        "genre": "Groove/Thrash Metal",
        "status": "Split-up"
      },
      {
        "id": 30,
        "link": "https://www.metal-archives.com/bands/10%3A13/3540452035",
        "name": "10:13",
        "country": "United States",
        "genre": "Psychedelic/Experimental Black Metal",
        "status": "Active"
      },
      {
        "id": 31,
        "link": "https://www.metal-archives.com/bands/10Eyes/33414",
        "name": "10Eyes",
        "country": "Germany",
        "genre": "Power Metal",
        "status": "Split-up"
      },
      {
        "id": 32,
        "link": "https://www.metal-archives.com/bands/11_Paranoias/3540366703",
        "name": "11 Paranoias",
        "country": "United Kingdom",
        "genre": "Sludge/Doom Metal",
        "status": "Active"
      },
      {
        "id": 33,
        "link": "https://www.metal-archives.com/bands/1134/76862",
        "name": "1134",
        "country": "United States",
        "genre": "Thrash/Groove Metal",
        "status": "Active"
      },
      {
        "id": 34,
        "link": "https://www.metal-archives.com/bands/11%3A11/3540317975",
        "name": "11:11",
        "country": "United States",
        "genre": "Heavy/Thrash Metal",
        "status": "Active"
      },
      {
        "id": 35,
        "link": "https://www.metal-archives.com/bands/11%3A34/96094",
        "name": "11:34",
        "country": "United States",
        "genre": "Death/Thrash Metal",
        "status": "Active"
      },
      {
        "id": 36,
        "link": "https://www.metal-archives.com/bands/11redearth/3540447569",
        "name": "11redearth",
        "country": "Germany",
        "genre": "Experimental/Psychedelic Doom Metal",
        "status": "Active"
      },
      {
        "id": 37,
        "link": "https://www.metal-archives.com/bands/11th_Dimension/3540382000",
        "name": "11th Dimension",
        "country": "Portugal",
        "genre": "Progressive Metal",
        "status": "Active"
      },
      {
        "id": 38,
        "link": "https://www.metal-archives.com/bands/11th_Plague/3540439269",
        "name": "11th Plague",
        "country": "United States",
        "genre": "Groove/Thrash Metal",
        "status": "Active"
      },
      {
        "id": 39,
        "link": "https://www.metal-archives.com/bands/12_Days_of_Anarchy/94580",
        "name": "12 Days of Anarchy",
        "country": "United States",
        "genre": "Death Metal",
        "status": "Split-up"
      },
      {
        "id": 40,
        "link": "https://www.metal-archives.com/bands/12_Days_Straight/3540472985",
        "name": "12 Days Straight",
        "country": "United States",
        "genre": "Groove Metal",
        "status": "Active"
      },
      {
        "id": 41,
        "link": "https://www.metal-archives.com/bands/12_Eyes/97701",
        "name": "12 Eyes",
        "country": "United States",
        "genre": "Sludge Metal",
        "status": "On hold"
      },
      {
        "id": 42,
        "link": "https://www.metal-archives.com/bands/12_Gauge/120735",
        "name": "12 Gauge",
        "country": "Netherlands",
        "genre": "Thrash/Groove Metal/Metalcore",
        "status": "Split-up"
      },
      {
        "id": 43,
        "link": "https://www.metal-archives.com/bands/12_Gauge/3540473187",
        "name": "12 Gauge",
        "country": "Ireland",
        "genre": "Thrash/Groove Metal",
        "status": "Split-up"
      },
      {
        "id": 44,
        "link": "https://www.metal-archives.com/bands/12_Gauge_Dead/57334",
        "name": "12 Gauge Dead",
        "country": "Sweden",
        "genre": "Death/Thrash Metal",
        "status": "Split-up"
      },
      {
        "id": 45,
        "link": "https://www.metal-archives.com/bands/12_Gauge_Massacre/3540460616",
        "name": "12 Gauge Massacre",
        "country": "United States",
        "genre": "Deathcore",
        "status": "Split-up"
      },
      {
        "id": 46,
        "link": "https://www.metal-archives.com/bands/12_Gauge_Outrage/3540394417",
        "name": "12 Gauge Outrage",
        "country": "Ireland",
        "genre": "Heavy Metal",
        "status": "Active"
      },
      {
        "id": 47,
        "link": "https://www.metal-archives.com/bands/12_Ton_Method/129676",
        "name": "12 Ton Method",
        "country": "United Kingdom",
        "genre": "Technical Groove Metal",
        "status": "Split-up"
      },
      {
        "id": 48,
        "link": "https://www.metal-archives.com/bands/12_Ton_Sledge/88309",
        "name": "12 Ton Sledge",
        "country": "United States",
        "genre": "Thrash Metal",
        "status": "Split-up"
      }
    ];
    function close() {
      emit("side-active", EventSource);
    }
    return { close,bands };
  }
};
</script>

<style scoped>
.endMyLife {
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
  -webkit-transform: translateX(-20vw);
  transform: translateX(-20vw);
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
