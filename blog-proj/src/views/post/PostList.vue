<template>
  <div>
      <p>PostList</p>
      <div v-for='post in posts' :key='post.id'>
          <PostView :post='post' />
          <button>toggle posts</button>
      </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import PostView from './PostView.vue'

export default {
    props: ['posts'],
    components: { PostView },
    setup(props) {
        console.log('PostList', props.posts);

        onMounted(() => {
            console.log('mounted');
        });
        // onUnmounted(() => {
        //     console.log('onUnmounted');
        // });
        // onUpdated(() => {
        //     console.log('onUpdated');
        // });
    },
}
</script>

<style>

</style>
