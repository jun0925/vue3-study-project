<template>
  <ChildComponent @send-message="sendMessage" ref="child_component"/>
  <button type="button" @click="chnageChildData">Change Child Data</button>
</template>
<script>
  import ChildComponent from './ChildComponent3'
  export default {
    components: {
      ChildComponent
    },
    methods: {
      chnageChildData() {
        this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터'
      }
    }
  }
</script>