import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import photo from './photo'
import map from './map'
import trafficlights from './trafficlights'
import shared from "./shared"

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
   modules: {
       photo,
       map,
       trafficlights,
       shared
   } 
})