<template>
  <div>
    <router-view></router-view>
    <v-layout column align-center class="pt-5">
      <FileUpload @upload="handleUpload"></FileUpload>
      <v-btn
      href="https://drive.google.com/open?id=183HvnCy_V0TqVRKss00AkUIq-PJYetTq"
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
