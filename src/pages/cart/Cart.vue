<template>
  <div id="cart">
    <cart-nav-bar class="cart-navbar"/>
    <scroll ref="scroll" class="cart-scroll">
      <cart-list :cart-list="cartList"></cart-list>
    </scroll>
    <botton-bar/>
  </div>
</template>

<script>
import CartNavBar from './childcnps/CartNavBar'
import CartList from './childcnps/CartList'
import BottonBar from './childcnps/BottonBar'
import Scroll from 'components/scroll/Scroll'
export default {
  components:{
    CartNavBar,
    CartList,
    BottonBar,
    Scroll
  },
  computed: {
		  cartList() {
		    return this.$store.getters.cartList
      }
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  }
}

</script>
<style scoped>
#cart {
  height: 100vh;
}
.cart-scroll {
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
  overflow: hidden;
} 
</style>