export default {
    state: {
        photos: [
            {
                id: '1',
                imageSrc: 'name.png'
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        photos (state) {
            return state.photos
        }
    }
}