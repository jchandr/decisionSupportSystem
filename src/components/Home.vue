<template>
  <div>
    <router-view></router-view>
    <v-layout column align-center>
      <v-btn
      href="https://drive.google.com/open?id=1lL6Snzht4stPq1AXnHf-mw5F3Vq_I9Ub"
      target="blank">
        {{downloadMsg}}
        <v-icon right dark>cloud_download</v-icon>
      </v-btn>
      <v-container fluid>
          <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
      </v-container>

         <FileUpload></FileUpload>
    </v-layout>
  </div>
</template>

<script>
import FileUpload from './FileUpload';

export default {
  name: 'Home',
  data() {
    return {
      downloadMsg: 'Click Here to Download the template of CSV file',
    };
  },
  methods: {
  },
  components: {
    FileUpload,
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
