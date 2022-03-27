<template>
  <h1>JobDetails</h1>
  <!-- <p>{{ $route.params.id }}</p> -->
  <!-- <p>{{ id }}</p> -->
  <div v-if="job">
    <p>{{ job.id }}</p>
    <p>{{ job.title }}</p>
    <p>{{ job.content }}</p>
</div>
<div v-else>
    <p>Loading data details...</p>
</div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            id: this.$route.params.id,
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
          .then(res => res.json())
          .then(data => this.job = data)
          .catch(err => console.error(err.message))
    }
}
</script>

<style>

</style>
