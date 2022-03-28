<template>
  <div class="card">
    <h2>setupBasic</h2>
    <p ref='p'>11 My name is {{ name }} and my age is {{ age }}</p>
    <p>name: My name is {{ name }} and my age is {{ age }}</p>
    <p>name2: My name is {{ name2 }} and my age is {{ age2 }}</p>
    <button @click="handleClick">click here</button>
    <input type='text' placeholder="name" v-model='name'>
    <input type='text' placeholder="name2" v-model='name2'>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  // composition api
  setup() {
    console.log('setup');
    console.log('this', this);

    const p = ref(null);
    // console.log('p', p, p.value);

    // data
    // 2-way 바인딩이 동작하지 않는다
    let name = 'james';
    let age = 10;

    // 2-way 바인딩이 동작한다
    const name2 = ref('dog');
    const age2 = ref(20);

    // methods
    const handleClick = () => {
      console.log('clicked');
      // console.log('p', p, p.value);
      // p.value.classList.add('test');
      // p.value.textContent = 'hello world';

      name = 'paul';
      age = 11;
      console.log('name', name);

      name2.value = 'cat';
      age2.value = 21;
    }

    console.log('name', name);

    return { name, age, handleClick, p, name2, age2 };
  },

  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  data() {
    console.log('data');
    return {

    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
