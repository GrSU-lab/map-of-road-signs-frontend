import '@babel/polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/vuetify'
import App from './App.vue'

import Vue2Leaflet from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

Vue.config.productionTip = false

Vue.component('l-map', Vue2Leaflet.LMap);
Vue.component('l-tilelayer', Vue2Leaflet.LTileLayer);
Vue.component('l-marker', Vue2Leaflet.LMarker);
Vue.component('l-circle', Vue2Leaflet.LCircle);
Vue.component('l-popup', Vue2Leaflet.LPopup);
Vue.component('l-marker-cluster', Vue2LeafletMarkerCluster);

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
