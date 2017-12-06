<template>
  <div>
    <v-card>
      <v-card-title class="headline">Attribute Scores</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Company Size</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.companySize.small" label="Small"></v-text-field>
                  <v-text-field v-model.number="scores.companySize.medium" label="Medium"></v-text-field>
                  <v-text-field v-model.number="scores.companySize.large" label="Large"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Growth Percentage</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.growthPercentage.negative" label="Negative"></v-text-field>
                  <v-text-field v-model.number="scores.growthPercentage.lessThan50" label="< 50%"></v-text-field>
                  <v-text-field v-model.number="scores.growthPercentage.greaterThan50" label="> 50%"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Primary Market</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.primaryMarket.utility" label="Utility"></v-text-field>
                  <v-text-field v-model.number="scores.primaryMarket.commercial" label="Commercial"></v-text-field>
                  <v-text-field v-model.number="scores.primaryMarket.residential" label="Residential"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Number of Years</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.experience.y0to5" label="0-5 Years"></v-text-field>
                  <v-text-field v-model.number="scores.experience.y6to10" label="6-10 Years"></v-text-field>
                  <v-text-field v-model.number="scores.experience.y11to15" label="10-15 Years"></v-text-field>
                  <v-text-field v-model.number="scores.experience.y15plus" label="15+ Years"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Primary Service</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.primaryService.epc" label="EPC"></v-text-field>
                  <v-text-field v-model.number="scores.primaryService.rooftopContractor" label="Rooftop Contractor"></v-text-field>
                  <v-text-field v-model.number="scores.primaryService.developer" label="Developer"></v-text-field>
                  <v-text-field v-model.number="scores.primaryService.electricalSubcontractor" label="Electrical Subcontractor">
                  </v-text-field>
                  <v-text-field v-model.number="scores.experience.constructionFirm" label="Construction Firm">
                  </v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Solar Power Tech</v-card-title>
                <v-card-text>
                  <v-text-field v-model.number="scores.technology.pvOrThermal" label="PV / Thermal"></v-text-field>
                  <v-text-field v-model.number="scores.technology.pv" label="Photovoltaic"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions >
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" flat @click.native="$emit('cancel')">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="$emit('update', scores)">Update</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'AttributeScore',
    props: {
      scoresToEdit: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        scores: undefined,
      };
    },
    created() {
      this.scores = this.scoresToEdit;
    },
  };
</script>
<style lang="stylus">
  @import '../stylus/main'
</style>
