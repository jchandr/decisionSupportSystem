<template>
  <div>
    <router-view></router-view>
    <v-data-table
        v-bind:headers="tableHeaders"
        :items="workData"
        hide-actions
        class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs">{{ props.item.COMPANY }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :( <br>
          <a href="/">Please click here to Upload the Data again !</a>
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
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
        { text: 'Company', value: 'company', align: 'left' },
        { text: 'Score', value: 'score', align: 'left' },
      ],
    };
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
