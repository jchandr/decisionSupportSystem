<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    workbookData: {
      required: true,
    },
  },
};
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
