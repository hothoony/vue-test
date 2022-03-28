<template>
  <div class='card'>

      <h2>Ref</h2>
      <p>{{ objOne.name }} - {{ objOne.age }}</p>
      <p>{{ nameOne }}</p>
      <button @click="changeObjOne">changeObjOne</button>
      <input type='text' v-model='objOne.age'>

      <h2>Reactive</h2>
      <p>{{ objTwo.name }} - {{ objTwo.age }}</p>
      <p>{{ nameTwo }}</p>
      <button @click="changeObjTwo">changeObjTwo</button>
      <input type='text' v-model='objTwo.age'>

  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'

export default {
    setup() {
        const objOne = ref({name: 'james', age: 10});
        const objTwo = reactive({name: 'steve', age: 20});

        const nameOne = ref('dog');
        const nameTwo = reactive('cat');

        const changeObjOne = () => {
            objOne.value.age = 15;
            nameOne.value = 'dog changed'; // works
        }

        const changeObjTwo = () => {
            objTwo.age = 25;
            nameTwo = 'cat changed'; // doesn't work
        }

        return { objOne, changeObjOne, objTwo, changeObjTwo, nameOne, nameTwo };
    }
}
</script>

<style>

</style>
