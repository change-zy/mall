<template>
 <div class="panel">
      <div class="item" v-for="(item, index) in categoryData.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    categoryData:{
      type:Object
    }
  }
}

</script>
<style scoped>
 .panel {
   display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
 } 
 
 img {
    width: 100%;
  }

  .item {
    margin-top: 10px;
    width: 80px;
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 5px;
  }
</style>