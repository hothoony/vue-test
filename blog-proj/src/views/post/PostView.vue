<template>
  <!-- <p>PostView</p> -->
  <p>PostView : {{ post.title }} - {{ post.content }}</p>
</template>

<script>
export default {
    props: ['post'],
    setup(props) {
        console.log('PostView', props.post);
    }
}
</script>

<style>

</style>
