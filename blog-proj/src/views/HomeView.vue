<template>
  <div>
    <!-- <h2>Home</h2> -->
    <PostMain />
    <ComputedValue />
    <RefVsReactive />
    <setupBasic />
  </div>
</template>

<script>
import setupBasic from './setupBasic.vue'
import RefVsReactive from './RefVsReactive.vue'
import ComputedValue from './ComputedValue.vue'
import PostMain from './post/PostMain.vue'

export default {
  components: {
    setupBasic,
    RefVsReactive,
    ComputedValue,
    PostMain,
  }
}
</script>
