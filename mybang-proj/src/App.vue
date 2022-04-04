<template>

  <div class="black-bg" v-if="modelOpen">
    <div class="white-bg">
      <h4>모달 제목</h4>
      <p>모달 내용입니다.</p>
      <button @click="handleCloseModal">close</button>
    </div>
  </div>

  <div v-for="(product, i) in products" :key='i'>
    <h4 @cilck="handleShowModal">{{ product }}, {{ i }}</h4>
    <p>xx 만원</p>
    <button @click="handleClick(i)">허위매물신고</button> <span>신고수: {{ accuses[i] }}</span>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      modelOpen: false,
      accuses: [0, 0, 0],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  components: {
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.accuses[e]++;
    },
    handleShowModal() {
      this.modelOpen = true;
    },
    handleCloseModal() {
      this.modelOpen = false;
    }
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

  margin: 0;
  padding: 0;
}

html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  top: 0;
  left: 0;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
