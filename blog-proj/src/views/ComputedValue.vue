<template>
  <div class="card">
    <h2>ComputedValue</h2>
    <input type='text' v-model='search'>
    <button @click='stopWatchNEffect'>stop watch</button>
    <div>filteredColors: {{ filteredColors }}</div>
    <p>search : {{ search }}</p>
    <div v-for="color in filteredColors" :key='color'>{{ color }}</div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
    const search = ref('');
    const colors = ref(['red', 'blue', 'green', 'white', 'black', 'yellow', 'orange', 'magenta']);
    const filteredColors = computed(() => {
      console.log('colors', search.vaule, colors.value.filter(color => color));
      return colors.value.filter(color => color);
      return colors.value.filter(color => color.includes(search.vaule));
    })
    console.log('filteredColors', filteredColors);

    const stopWatch = watch(search, () => {
      console.log('watch', search.value);
    });

    const stopEffect = watchEffect(() => {
      console.log('watchEffect', search.value);
    });

    const stopWatchNEffect = () => {
      stopWatch();
      stopEffect();
    }

    return { search, colors, filteredColors, stopWatchNEffect }
  }
}
</script>
