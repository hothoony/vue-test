<template>
  <!-- <p>PostView</p> -->
  <p>PostView : {{ post.title }} - {{ post.content }}</p>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
    props: ['post'],
    setup(props) {
        console.log('PostView', props.post);
        const snippet = computed(() => {
          console.log('snippet');
          return props.post.content.substring(0, 5) + '...';
        });

        return { snippet };
    }
}
</script>

<style>

</style>
