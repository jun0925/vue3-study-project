<script>
  export default {
    inject: ['itemLength'],
    mounted() {
      console.log(`Item Lenght : ${this.itemLength}`)
    }
  }
</script>