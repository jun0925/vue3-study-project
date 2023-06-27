<template>
  <h1>Hello, {{ title }}</h1>
  <div v-html="tag"></div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'World',
        tag: '<h2>h2 text</h2>',
      }
    }
  }
</script>