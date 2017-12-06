<template>
  <div>
    <router-view></router-view>
    <FileUpload @upload="handleUpload"></FileUpload>
    <v-layout column align-center>
      <v-btn
      href="https://drive.google.com/open?id=1lL6Snzht4stPq1AXnHf-mw5F3Vq_I9Ub"
      target="blank">
        {{downloadMsg}}
        <v-icon right dark>cloud_download</v-icon>
      </v-btn>
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
    handleUpload(dataInJson) {
      this.$router.push({
        name: 'Result',
        params: {
          dataInJson,
        },
      });
    },
  },
  components: {
    FileUpload,
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
