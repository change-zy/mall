<template>
  <div class="goods" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">¥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
 props: {
		goodsitem: {
		  type: Object,
      default: {}
    }
  },
  computed:{
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods:{
    imageLoad(){
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('itemImageLoad')
      }else if(this.$route.path.indexOf('/detail')){
        this.$bus.$emit('detailImgLoad')
      }
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  }
}

</script>
<style scoped>
.goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #ff5777;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect.svg") 0 0/14px 14px;
  }
</style>