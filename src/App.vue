<template>
  <v-app :dark="isDark">
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <big>Lead Conversion Evaluator</big>
      <v-btn @click="toggleTheme" :dark="!isDark">
        {{currentTheme}}
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; MIT Licence</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        isDark: true,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Decision Support System for Renewable Energy',
      };
    },
    computed: {
      currentTheme() {
        return this.isDark ? 'Light' : 'Dark';
      },
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark;
      },
    },
  };

</script>
