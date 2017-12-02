<template>
  <div>
    <v-card>
      <v-card-title class="headline">Attribute Scores</v-card-title>
      <v-card-text>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Company Size</v-card-title>
                <v-card-text>
                  <v-text-field label="Small"></v-text-field>
                  <v-text-field label="Medium"></v-text-field>
                  <v-text-field label="Large"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Growth Percentage</v-card-title>
                <v-card-text></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Total Production</v-card-title>
                <v-card-text>{{ n }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Primary Market</v-card-title>
                <v-card-text>
                  <v-text-field label="Utility"></v-text-field>
                  <v-text-field label="Commercial"></v-text-field>
                  <v-text-field label="Residential"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Number of Years</v-card-title>
                <v-card-text>
                  <v-text-field label="0-5 Years"></v-text-field>
                  <v-text-field label="6-10 Years"></v-text-field>
                  <v-text-field label="10-15 Years"></v-text-field>
                  <v-text-field label="15+ Years"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs2>
              <v-card flat tile>
                <v-card-title>Solar Power Tech</v-card-title>
                <v-card-text>
                  <v-text-field label="Concentrated Solar Power"></v-text-field>
                  <v-text-field label="Photovoltaic"></v-text-field>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions >
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" flat @click.native="$emit('cancel')">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Update</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'AttributeScore',
  };
</script>
<style lang="stylus">
  @import '../stylus/main'
</style>
