export default {
    state: {
        map: {
            zoom:13,
            center: [53.6814823, 23.8466600],
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: [53.6810293, 23.8427814]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        map (state) {
            return state.map
        }
    }
}