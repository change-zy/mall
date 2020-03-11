<template>
  <div class="cart-navbar">
   <nab-bar><div slot="center">购物车{{cartLength}}</div></nab-bar>
  </div>
</template>

<script>
import NabBar from 'components/nabbar/NabBar'
export default {
  components:{
    NabBar
  },
  computed:{
    cartLength(){
      return this.$store.getters.cartLength
    }
  }
}

</script>
<style scoped>
.cart-navbar {
  background-color: #ff5777;
  font-weight: 500;
  color: #fff;
  z-index: 10;
}
</style>