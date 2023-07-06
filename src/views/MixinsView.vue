<script>
  import ApiMixin from '../api.js'
  export default {
    name: 'MixinsView',
    mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
    data() {
      return {
        productList: []
      }
    },
    async mounted() {
      this.productList = await this.$callAPI("https://a1ab24d5-2b46-42f4-9938-6c01e354beb3.mock.pstmn.io/list")
      console.log(this.productList)
    }
  }
</script>