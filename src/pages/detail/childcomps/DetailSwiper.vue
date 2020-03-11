<template>
    <swiper class="detail-vedio">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/swiper'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      } 
    }
  },
  components:{
       Swiper,
    SwiperItem
  }
}

</script>
<style scoped>
.detail-vedio {
  height: 300px;
  overflow: hidden;
}
</style>