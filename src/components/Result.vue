<template>
  <div>
    <router-view></router-view>
    <v-dialog v-model="changeAttributeDialog">
      <AttributeScore @cancel="changeAttributeDialog = false"
                      :scoresToEdit="currentScores"
                      @update="handleCustomScoring"></AttributeScore>
    </v-dialog>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex :wrap="true" fluid xs4>
          <v-card color="secondary" dark>
            <!--<v-card-text>-->
              <v-expansion-panel expand>
                <v-expansion-panel-content v-for="t in attributes" :key="t.title"
                v-model="t.isEnabled">
                  <div slot="header">{{ t.title }}</div>
                  <v-card class="pa-0 ma-0">
                    <v-card-text class="black lighten-3 pa-0 ma-0">
                      <v-radio-group v-if="t.inputType === 'radio'"
                      v-model="t.currentValue"
                      class="pa-0 ma-0"
                      row
                      wrap>
                        <v-radio v-for="(key,val) in t.values"
                        :disabled="!t.isEnabled"
                        class="pa-0"
                        :key = "key"
                        :label="key"
                        :value="val"></v-radio>
                      </v-radio-group>
                      <v-select
                        v-if="t.inputType == 'dropdown'"
                        v-model="t.currentValue"
                        :items="t.values"
                        item-text="name"
                        item-value="abbreviation"
                        label="Select"
                        single-line
                        bottom
                      ></v-select>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            <!--</v-card-text>-->
          </v-card>
          <v-switch :label="customScoreSwitchLablel" @change="handleScoreSwitch" v-model="customScoreSwitch"></v-switch>
          <v-btn @click.native="changeAttributeDialog = true" v-if="customScoreSwitch" block> Change Attribute Weightage</v-btn>
        </v-flex>
        <v-flex xs8 text-xs>
          <v-card dark color="secondary">
              <ResultTable :control="attributes" :workData="processedInput"></ResultTable>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import attributes from '../assets/frontEndAttributes';
import ResultTable from './ResultTable';
import AttributeScore from './AttributeScore';
import dataStructure from '../assets/companyDataStructure';
import scores from '../assets/defaultScores';
import calculateScore from '../assets/calculateScores';

export default {
  name: 'Result',
  props: {
    workbookData: {
      required: true,
    },
  },
  data() {
    return {
      attributes: {
        ...attributes,
      },
      customScoreSwitch: false,
      changeAttributeDialog: false,
      processedInput: [],
      currentScores: undefined,
      lastCustomScores: undefined,
      defaultScores: undefined,
    };
  },
  computed: {
    customScoreSwitchLablel() {
      if (this.customScoreSwitch === false) {
        return 'Calculating With Default Scores';
      }
      return 'Use the Button Below To Change';
    },
  },
  methods: {
    processInput() {
      const d = new Date();
      this.workbookData.forEach((e) => {
        const temp = {
          ...dataStructure,
        };
        temp.city = e.city;
        temp.company = e.company;
        temp.companySize = e.companySize.toLowerCase();
        temp.funding = e.funding;
        if (e.funding === 'YES') {
          temp.funding = true;
        } else {
          temp.funding = false;
        }
        temp.primaryMarket = e.primaryMarket.toLowerCase();
        temp.primaryService = e.primaryService.toLocaleLowerCase();
        temp.production2015 = parseFloat(e.production2015);
        temp.production2016 = parseFloat(e.production2016);
        temp.growthPercentage = parseFloat(e.growthPercentage);
        temp.percentageOfTotalInstalledIn2016 = parseFloat(e.percentageOfTotalInstalledIn2016);
        temp.rank = Number(e.rank);
        temp.state = e.state;
        temp.totalMw = parseFloat(e.totalMw);
        temp.totalMw2014 = parseFloat(e.totalMw2014);
        temp.totalProduction = Number(e.totalProduction);
        temp.yearFounded = Number(e.yearFounded);
        temp.experience = d.getFullYear() - temp.yearFounded;
        temp.numberOfProjects = Number(e.numberOfProjects);
        temp.numberOfEmployees = Number(e.numberOfEmployees);
        temp.technology = e.technology.toLocaleLowerCase();
        this.processedInput.push(temp);
      });
    },
    handleCustomScoring(customScores) {
      this.lastCustomScores = customScores;
      this.changeAttributeDialog = false;
      this.processedInput.forEach((e) => {
        e.score = calculateScore(e, customScores);
      });
    },
    handleScoreSwitch(switchValue) {
      if (switchValue === true) {
        this.handleCustomScoring(this.lastCustomScores);
      } else {
        this.calculateDefaultScores();
      }
    },
    calculateDefaultScores() {
      this.processedInput.forEach((e) => {
        e.score = calculateScore(e, this.defaultScores);
      });
    },
  },
  created() {
    this.processInput();
    this.defaultScores = {
      ...scores,
    };
    this.currentScores = JSON.parse(JSON.stringify(this.defaultScores));
    this.lastCustomScores = JSON.parse(JSON.stringify(this.defaultScores));
    this.calculateDefaultScores();
  },
  components: {
    ResultTable,
    AttributeScore,
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
