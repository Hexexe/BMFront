<template>
  <div id="mapid"></div>
</template>

<script lang="ts">
// https://leafletjs.com/reference-1.7.1.html lähteet mun säätöihin
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import borderData from "@/assets/geoLow.json";
import { Options, Vue } from "vue-class-component";
import {} from "geojson"; //Feature

@Options({})
export default class Map extends Vue {
  geojson: any = null;
  mapDiv: any = null;

  // init
  initMap(): void {
    // border data
    const borders: any = borderData;
    // map bounds
    const bounds = new L.LatLngBounds(
      new L.LatLng(-60, -181),
      new L.LatLng(90, 181)
    );

    //div id "mapid"
    this.mapDiv = L.map("mapid", {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0
    }).setView(L.latLng(60.15568, 24.95535), 13);

    //tiles
    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", // tileset
      {
        attribution:
          "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors", // credits
        maxZoom: 13, // kuinka lähelle voi zoom
        minZoom: 3 // kuinka kauas voi zoom out
      }
    ).addTo(this.mapDiv);
    this.geojson = L.geoJSON(borders, {
      style: this.setStyle, // stylet
      onEachFeature: this.onEachFeature // kutsutaan joka featuressa (lisää listeners ja muita memes)
    }).addTo(this.mapDiv);
  }

  setStyle() {
    return {
      fillColor: "#000000", //fill color (obv)
      weight: 1, // border paksuus
      opacity: 1, // border opacity 0-1
      color: "red", //border fill color
      dashArray: "3", // border viivoja
      fillOpacity: 0.3 // fill opacity (lol) 0-1
    };
  }

  // tapahtuu hirveitä
  onEachFeature(feature: any, layer: any) {
    layer.on({
      mouseover: this.highlightFeature, //Interaction events
      mouseout: this.resetHighlight,
      click: this.zoomToFeature
    });
  }

  highlightFeature(e: any) {
    const layer = e.target;
    layer.setStyle({
      fillColor: "#ffffff", //fill color (obv)
      color: "#ffffff",
      dashArray: "",
      fillOpacity: 0.1
    });
  }
  resetHighlight(e: Event) {
    this.geojson.resetStyle(e.target);
  }
  zoomToFeature(e: any) {
    this.mapDiv.fitBounds(e.target.getBounds());
  }
  mounted() {
    this.initMap();
  }
}
</script>

<style scoped>
#mapid {
  height: 95vh;
}
</style>
