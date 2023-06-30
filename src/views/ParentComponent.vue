<template>
  <ChildComponent @send-message="sendMessage" ref="child_component" />
</template>
import ChildComponent from './ChildComponent.vue';
<script>
  import ChildComponent from './ChildComponent'
  export default {
    components: {
    ChildComponent
},
    mounted() {
      this.$refs.child_component
    }
  }
</script>