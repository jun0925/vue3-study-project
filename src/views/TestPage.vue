<template>
  <h1>Full Name: {{ fullName }}</h1>
  <button type="button" @click="changeName">변경</button>
</template>
<script>
  export default {
    data() {
      return {
        firstName: 'Yeongjun',
        lastName: 'Kim',
        fullName: ''
      }
    },
    // computed: {
    //   fullName() {
    //     return this.firstName + ' ' + this.lastName
    //   }
    // },
    watch: {
      firstName() {
        this.fullName = this.firstName + ' ' + this.lastName
      },
      lastName() {
        this.fullName = this.firstName + ' ' + this.lastName
      }
    },
    methods: {
      changeName() {
        this.firstName = 'Eunsol'
      }
    }
  }
</script>