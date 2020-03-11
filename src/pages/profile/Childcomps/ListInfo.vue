<template>
<div>
   <div class="list-info">
    <div class="item-info">
      <img src="~assets/img/profile/message.png" alt="">我的消息
    </div>
    <div class="item-info">
      <img src="~assets/img/profile/pointer.png" alt="">积分商城
    </div>
    <div class="item-info">
      <img src="~assets/img/profile/vip.png" alt="">会员卡
    </div>
  </div>
  <div class="list-info">
    <div class="item-info">
      <img src="~assets/img/profile/cart.png" alt="">我的购物车
    </div>
    <div class="item-info">
      <img src="~assets/img/profile/app.png" alt="">下载购物车APP
    </div>
  </div>
</div>
 
</template>

<script>
export default {

}

</script>
<style scoped>
.list-info {
  background-color: #fff;
  border-top:15px solid rgba(110, 106, 106, 0.1);
  color: #333;
  height: 120px;
}
.list-info img{
  width: 18px;
  height: 18px;
  margin-right: 6px;
  margin-left: 10px;
}
.item-info {
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  border-bottom:1px solid rgba(100, 100, 100, .1);
}
</style>