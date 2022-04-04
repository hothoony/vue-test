<template>

  <div v-for="(product, i) in products" :key='i'>
    <h4>{{ product }}, {{ i }}</h4>
    <p>xx 만원</p>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  components: {
  },
  methods: {
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
