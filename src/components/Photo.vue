<template>
 
    <v-layout fill-height>
      <v-flex>
          <l-map style="height: 100%; z-index:0" :zoom="map.zoom" :center="map.center">
            <l-tilelayer :url="map.url" :attribution="map.attribution"></l-tilelayer>
            <l-marker :lat-lng="map.marker"></l-marker>
          </l-map>
      </v-flex>
    </v-layout>

</template>

<script>
  export default {
    computed: {
      map () {
        return this.$store.getters.map
      },
      photos () {
        return this.$store.getters.photos
      }
    }
  }
</script>

<style>
@import "~leaflet/dist/leaflet.css";
</style>
