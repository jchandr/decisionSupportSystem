<template>
  <div>
    <v-layout class="pb-3">
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
  /* eslint-disable dot-notation */

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
          workbook.Sheets.Sheet1['A1'].v = 'ranks';
          workbook.Sheets.Sheet1['B1'].v = 'company';
          workbook.Sheets.Sheet1['C1'].v = 'city';
          workbook.Sheets.Sheet1['D1'].v = 'state';
          workbook.Sheets.Sheet1['E1'].v = 'primaryMarket';
          workbook.Sheets.Sheet1['F1'].v = 'primaryService';
          workbook.Sheets.Sheet1['G1'].v = 'companySize';
          workbook.Sheets.Sheet1['H1'].v = 'yearFounded';
          workbook.Sheets.Sheet1['I1'].v = 'funding';
          workbook.Sheets.Sheet1['J1'].v = 'totalProduction';
          workbook.Sheets.Sheet1['K1'].v = 'totalMw';
          workbook.Sheets.Sheet1['L1'].v = 'percentageOfTotalInstalledIn2016';
          workbook.Sheets.Sheet1['M1'].v = 'age';
          workbook.Sheets.Sheet1['N1'].v = 'production2016';
          workbook.Sheets.Sheet1['O1'].v = 'production2013';
          workbook.Sheets.Sheet1['P1'].v = 'production2014';
          workbook.Sheets.Sheet1['Q1'].v = 'production2015';
          workbook.Sheets.Sheet1['R1'].v = 'growthPercentage';
          workbook.Sheets.Sheet1['S1'].v = 'technology';
          workbook.Sheets.Sheet1['T1'].v = 'numberOfProjects';
          workbook.Sheets.Sheet1['U1'].v = 'numberOfEmployees';
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
