<template>
  <div>
    <router-view></router-view>
    <v-data-table
      v-bind:headers="tableHeaders"
      :items="filteredInput"
      hide-actions
      class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs">{{ props.item.company }}</td>
        <td class="text-xs">{{ props.item.score }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          <p v-if="workData === undefined">Sorry, nothing to display here :(</p>
          <p v-if="workData !== undefined">No Results for applied Filter</p>
          <a v-if="workData === undefined" href="/">Please click here to Upload the Data again !</a>
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { filter } from 'lodash/collection';
  import dataStructure from '../assets/companyDataStructure';
  import companyScore from '../assets/calculateScores';

  export default {
    name: 'ResultTable',
    props: {
      control: {
        type: Object,
        required: true,
      },
      workData: {
        type: Array,
        required: true,
      },
      attributeScores: {
        type: Object,
      },
    },
    data() {
      return {
        tableHeaders: [
          {
            text: 'Company',
            value: 'company',
            align: 'left',
          },
          {
            text: 'Score',
            value: 'score',
            align: 'left',
          },
        ],
        processedInput: [],
        tempFilteredData: [],
      };
    },
    computed: {
      filteredInput() {
        this.applyFilters();
        return this.tempFilteredData;
      },
    },
    methods: {
      processInput() {
        this.workData.forEach((e) => {
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
          temp.production2013 = parseFloat(e.production2013);
          temp.production2014 = parseFloat(e.production2014);
          temp.production2015 = parseFloat(e.production2015);
          temp.production2016 = parseFloat(e.production2016);
          temp.rank = Number(e.rank);
          temp.state = e.state;
          temp.totalMw = parseFloat(e.totalMw);
          temp.totalMw2014 = parseFloat(e.totalMw2014);
          temp.totalProduction = Number(e.totalProduction);
          temp.yearFounded = Number(e.yearFounded);
          this.processedInput.push(temp);
        });
      },
      applyFilters() {
        this.tempFilteredData = [];
        this.tempFilteredData = filter(this.processedInput, (o) => {
          if (this.control.location.isEnabled === true) {
            return o.state === this.control.location.currentValue;
          }
          return true;
        });
      },
      calculateScores() {
        this.filteredInput.forEach((e) => {
          e.score = companyScore(e);
        });
      },
    },
    created() {
      this.processInput();
      this.calculateScores();
    },
  };
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
