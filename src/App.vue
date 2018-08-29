<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list dense>
        <v-list-tile
         v-for="link of links"
         :key="link.title"
         :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon
       class="hidden-md-and-up"
       @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
         v-for="link of links"
         :key="link.title"
         :to="link.url"
         flat
        >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
   
        
         
            <router-view></router-view>
   
      
    </v-content>

    <template v-if="error">
      <v-snackbar
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn
          color="pink"
          flat
          @click.native="closeError"
        >
          Закрыть
        </v-btn>
      </v-snackbar>
    </template>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      links: [
        {title: 'Главная', icon: 'home', url: '/'},
        {title: 'Карта', icon: 'map', url: '/map'},
        {title: 'Светофоры', icon: '', url: '/traffic-lights'},
        {title: 'Вход', icon: 'lock', url: '/login'},
        {title: 'Регистрация', icon: 'face', url: '/reg'}
      ]
    }),
    computed: {
      error() {
        return this.$store.getters.error
      }
    },
    methods: {
      closeError() {
        this.$store.dispatch('clearError')
      }
    },
    props: {
      source: String
    }
  }
</script>
