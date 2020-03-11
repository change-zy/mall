<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/swiper'
export default {
  data(){
    return {
      isLoad:false
    }
  },
  props: {
		  banners: {
		    type: Array,
        default: []
      }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
      this.$emit('swiperImageLoad')
      this.isLoad = true
      }
    }
  }
}
</script>
<style scoped>

</style>