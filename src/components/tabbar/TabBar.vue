<template>
  <div>
    <div id="tabbar">
      <tab-bar-item class="tabbar-item" path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-active-icon" >
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item class="tabbar-item" path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-active-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item class="tabbar-item" path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-active-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item class="tabbar-item" path="profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-active-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </div>
</div>
</template>

<script>
import TabBarItem from './TabBarItme'
export default {
  components:{
    TabBarItem
  }
}
</script>
<style scoped>
#tabbar {
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
    z-index: 1;
}
</style>
