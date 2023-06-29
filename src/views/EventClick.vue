<template>
  <div>
    <p><button type="button" @click="increaseCounter">Add 1</button></p>
    <p><button type="button" @click="setCount(7)">Set 7</button></p>
    <p><button type="button" @click="one(), two()">Click</button></p>
    <p>The counter is : {{ counter }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter += 1;
      },
      setCount(counter) {
        this.counter = counter
      },
      one() {
        alert('One')
      },
      two() {
        alert('Two')
      }
    }
  }
</script>