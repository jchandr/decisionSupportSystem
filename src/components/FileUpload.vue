<template>
  <div>
    <v-layout>
      <v-flex>
        <v-card>
          <input type='file' name="sampleFile" @change='handleFileInput'>
          <v-card-media
            src="https://static1.squarespace.com/static/5269a9bce4b07233cf8781fe/t/54aef1d7e4b0861dc9973663/1420751319960/"
            height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Upload your data CSV File</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import xlsx from 'xlsx';

  export default {
    name: 'FileUpload',
    data() {
      return {
        workbookInJson: undefined,
        rABS: false,
      };
    },
    methods: {
      handleFileInput(event) {
        const files = event.target.files;
        const f = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = xlsx.read(data, {
            type: this.rABS ? 'binary' : 'array',
          });
          /* DO SOMETHING WITH workbook HERE */
          this.workbookInJson = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);
          this.$emit('upload', this.workbookInJson);
        };
        if (this.rABS) {
          reader.readAsBinaryString(f);
        } else {
          reader.readAsArrayBuffer(f);
        }
      },
    },
  };
</script>
<style lang="stylus">
  @import '../stylus/main'
</style>
