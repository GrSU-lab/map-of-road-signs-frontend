<template>

    <v-layout fill-height>
        <v-flex>
            <l-map style="height: 100%" :zoom="map.zoom" :center="map.center">
                <l-tilelayer :url="map.url" :attribution="map.attribution"></l-tilelayer>
                <l-marker-cluster :options="clusterOptions">
                    <l-marker v-for="l in  trafficlights" :key="l.id" :lat-lng="l.location.coordinates"
                              :icon="icon">
                    </l-marker>
                </l-marker-cluster>
            </l-map>
        </v-flex>
    </v-layout>

</template>

<script>
  //import Vue2Leaflet from 'vue2-leaflet'
  import L from 'leaflet'
  import iconUrl from '../assets/traffic-light.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
  import iconRetinaUrl from '../assets/traffic-light-2x.png'


  export default {
    data () {
       let icon = L.icon(Object.assign({},
        L.Icon.Default.prototype.options,
        {iconUrl, iconRetinaUrl, shadowUrl}
      ))
      return {
        icon,
        clusterOptions: {}
      }
    },
    computed: {
      map () {
        return this.$store.getters.map
      },
      trafficlights () {
        return this.$store.getters.trafficlights
      }
    },
    mounted () {
      this.$store.dispatch('getTrafficLights')
    }
  }
</script>

<style>
    @import "~leaflet/dist/leaflet.css";
    @import "~leaflet.markercluster/dist/MarkerCluster.css";
    @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
     .marker-cluster-small{
      background-color:dodgerblue
    }
    .marker-cluster-small div{
      background-color: darkorchid
    }
</style>
