<template>
  <div class="card">
      <h2>PostMain</h2>
      <PostList :posts='posts' />
  </div>
</template>

<script>
import PostList from './PostList.vue'
import { ref } from 'vue'

export default {
    components: {
        PostList,
    },
    setup() {
        const posts = ref([
            {id: 1, title: 'title1', content: 'content1'},
            {id: 2, title: 'title2', content: 'content2'},
            {id: 3, title: 'title3', content: 'content3'},
        ]);

        return { posts };
    },
}
</script>

<style>

</style>
