<template>
<div class="user-info">
  <div class="user">
    <div class="user-img">
      <img src="~assets/img/profile/avatar.png" alt="">
    </div>
  </div>
  <div class="nmber">
    <div class="number-info">
      <div>登录/注册</div>
    <div class="text">
      <img src="~assets/img/profile/phone.png" alt="">暂无绑定手机号
    </div>
    </div>
  </div>
  <div class="mode">
    <img src="~assets/img/home/user-back.png" alt="">
  </div>
</div>
</template>

<script>
export default {

}

</script>
<style scoped>
.user-info {
  display: flex;
  height: 120px;
  background-color: #ff5777;
}
.user img {
  width: 100%;
  height: 100%;
}
.user-img {
  background-color: #fff;
  width: 60px;
  height: 60px;
  margin-left: 20px;
  margin-top: 30px;
  border-radius: 70px;
}
.user {
  flex: 30%;
}
.nmber {
  flex: 50%;
}
.number-info {
  height: 60px;
  color: #fff;
  margin-top: 40px;
}
.nmber img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}
.text {
  margin-top: 5px;
  font-size: 12px;
}
.mode {
  flex: 20%;
  text-align: center;
  line-height: 120px;
}
.mode img {
  width: 20px;
  height: 20px;
}
</style>