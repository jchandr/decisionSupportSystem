<template>
  <div>
    <router-view></router-view>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex fluid xs4>
          <v-card dark color="secondary">
            <v-card-text>
              <!-- <v-checkbox label="Product/Service"
              v-model="attributes.productOrService.isEnabled" dark></v-checkbox>
                <v-radio-group v-model="attributes.productOrService.currentValue"
                class="pa-0 ma-0"
                row>
                  <v-radio v-for="(key,val) in attributes.productOrService.values"
                  :disabled="!attributes.productOrService.isEnabled"
                  class="pa-0"
                  :key = "key"
                  :label="key"
                  :value="val"></v-radio>
                </v-radio-group> -->
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
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs8 text-xs>
          <v-card dark color="secondary">
            <v-card-text class="px-0">
              <ResultTable :control="attributes" :workData="workbookData"></ResultTable>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import attributes from '../assets/frontEndAttributes';
import ResultTable from './ResultTable';

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
    };
  },
  components: {
    ResultTable,
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
