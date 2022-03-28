<template>
  <div>
      <p>PostList</p>
      <div v-for='post in posts' :key='post.id'>
          <PostView :post='post' />
      </div>
  </div>
</template>

<script>
import PostView from './PostView.vue'

export default {
    props: ['posts'],
    components: {
        PostView
    },
    setup(props) {
        console.log('PostList', props.posts);
    },
}
</script>

<style>

</style>
