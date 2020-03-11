<template>
  <div class="detail">
    <detail-nabbar class="nav-bar" @titleClick="titleClick" :current-index="currentIndex"/>
    <scroll class="content" 
            ref="detailImgLoad" 
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"/>
    <back-top class="back-top" @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>

<script>
import DetailNabbar from './childcomps/DetailNabbar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import Scroll from 'components/scroll/Scroll'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamInfo from './childcomps/DetailParamInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import GoodsList from 'components/goodslist/GoodsList'
import DetailBottomBar from './childcomps/DetailBottomBar'
import BackTop from 'components/backtop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
export default {
  name: 'Detail',
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
      showBackTop:false
    }
  },
  components:{
    DetailNabbar,
    getDetail,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }   
    })
    getRecommend().then(res => {
      this.recommends = res.data.list
      
    })
  },
  mounted(){
    this.$bus.$on('detailImgLoad',() => {
      this.$refs.detailImgLoad.scroll.refresh()
    })
  },
  updated(){

  },
  methods:{
    titleClick(index){
      this.$refs.detailImgLoad.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
    backTop(){
      this.$refs.detailImgLoad.scroll.scrollTo(0,0,500)
    },
    imageLoad(){
    this.themeTopYs = []
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.param.$el.offsetTop)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    this.themeTopYs.push(Number.MAX_VALUE)
    },
    contentScroll(position){
      this._listenScrollTheme(-position.y)
      this.showBackTop = position.y < -1000
    },
    _listenScrollTheme(position){
      let length = this.themeTopYs.length
      for(let i=0 ; i<length ; i++){
        let ipos = this.themeTopYs[i]
        if(position >= ipos && position < this.themeTopYs[i+1]){
          if(this.currentIndex !== i){
            this.currentIndex = i
          }
          break
        }
      }
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.nowPrice;
      product.iid = this.iid;
      this.$store.commit('addCart',product)
    }
  }
}

</script>
<style scoped>
.detail {
    height: 100vh;
    position: relative;
    z-index: 2;
    background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
。nav-bar{
  background-color: #ff5777;
}
</style>