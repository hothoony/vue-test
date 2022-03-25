<template>
  <h1>hello vue.js</h1>
  <h1>{{ title }}</h1>

  <teleport to="#modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
      <h1>modal1 title</h1>
      <p>modal1 content</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModal2">
    <Modal theme="" @close="toggleModal2">
      <h1>modal2 title</h1>
      <p>modal2 content</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">show modal 1</button>
  <button @click="toggleModal2">show modal 2</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'title 22',
      message: 'content 22',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
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
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>
