<template>
  <div>
    <div id="mapid"></div>
    <Sidebar :active="active" :population="population" :country="country" @side-active="sideActive" />
  </div>
</template>

<script lang="ts">
// https://leafletjs.com/reference-1.7.1.html lähteet mun säätöihin
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import borderData from "@/assets/geoLow.json";
import { ref, onMounted } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import { getTopArtistsByTag } from "../metal_api";

export default {
  components: { Sidebar },
  setup() {
    const geojson: any = ref(null);
    const mapDiv: any = ref(null);
    const borders: any = ref(borderData); // border data
    const active = ref(false);
    const population = ref(0);
    const country = ref("");
    const bounds = ref(
      new L.LatLngBounds(new L.LatLng(-60, -181), new L.LatLng(90, 181))
    ); // map bounds

    const setStyle = () => {
      return {
        fillColor: "#000000", //fill color (obv)
        weight: 1, // border paksuus
        opacity: 1, // border opacity 0-1
        color: "red", //border fill color
        dashArray: "", // border viivoja
        fillOpacity: 0.3 // fill opacity (lol) 0-1
      };
    };

    const highlightFeature = (e: any) => {
      const layer = e.target;
      !active.value
        ? layer.setStyle({
            fillColor: "#ffffff", //fill color (obv)
            color: "#ffffff",
            dashArray: "",
            fillOpacity: 0.15
          })
        : null;
    };

    const resetHighlight = (e: Event) => {
      !active.value ? geojson.value.resetStyle(e.target) : null;
    };

    const zoomToFeature = (e: any) => {
      //const countryCode = e.target.feature.properties.iso_a2;
      getTopArtistsByTag("metalcore");
      geojson.value.resetStyle();
      mapDiv.value.fitBounds(e.target.getBounds());
      active.value = true;
      population.value = e.target.feature.properties.pop_est;
      country.value = e.target.feature.properties.name;
      const layer = e.target;
      layer.setStyle({
        fillColor: "#ffffff",
        color: "#ffffff",
        dashArray: "",
        fillOpacity: 0.25
      });
    };

    // tapahtuu hirveitä
    const onEachFeature = (feature: any, layer: any) => {
      layer.on({
        mouseover: highlightFeature, //Interaction events
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    };

    const initMap = () => {
      mapDiv.value = L.map("mapid", {
        maxBounds: bounds.value,
        maxBoundsViscosity: 1.0,
        zoomControl: false
      }).setView(L.latLng(60.15568, 24.95535), 8);
      L.control.zoom({ position: "bottomright" }).addTo(mapDiv.value);
      L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", // tileset
        {
          attribution:
            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors", // credits
          maxZoom: 13, // kuinka lähelle voi zoom
          minZoom: 3 // kuinka kauas voi zoom out
        }
      ).addTo(mapDiv.value);
      geojson.value = L.geoJSON(borders.value, {
        style: setStyle, // stylet
        onEachFeature: onEachFeature // kutsutaan joka featuressa (lisää listeners ja muita memes)
      }).addTo(mapDiv.value);
    };

    const sideActive = (e: Event) => {
      active.value = false;
      geojson.value.resetStyle(e.target);
    };

    onMounted(() => {
      initMap();
    });

    return { active, sideActive, population,country };
  }
};
</script>

<style scoped>
#mapid {
  height: calc(100%);
  width: 100%;
  position: absolute;
  z-index: 1;
}
</style>
