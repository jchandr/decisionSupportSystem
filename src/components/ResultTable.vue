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
      applyFilters() {
        this.tempFilteredData = [];
        this.tempFilteredData = filter(this.workData, (o) => {
          if (this.control.location.isEnabled === true) {
            return o.state === this.control.location.currentValue;
          }
          return true;
        });
      },
    },
  };
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
