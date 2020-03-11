<template>
  <div id="home">
    <nab-bar class="nabber"><div slot="center">购物街</div></nab-bar>
    <tab-control 
        ref="tabContro2"
        class="tabcontro" 
        :titles="['流行','新款','精选']"
        @itemClick="tabClick"
        v-show="isTabFixed"/>
    <scroll 
      class="content" 
      ref="scroll"
      :probe-type='3'
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <feature-view :features="recommends"/>
      <recommend-view/>
      <tab-control 
        ref="tabControl"
        :titles="['流行','新款','精选']"
        @itemClick="tabClick"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll> 
    <back-top 
      class="back-top" 
      @click.native="backClick" 
      v-show="ShowBackTop"/>
  </div>
</template>

<script>
//组件
import NabBar from 'components/nabbar/NabBar'
import HomeSwiper from './childcnps/HomeSwiper'
import FeatureView from './childcnps/FeatureView'
import RecommendView from './childcnps/RecommendView'
import TabControl from 'components/tabcontrol/TabControl'
import GoodsList from 'components/goodslist/GoodsList'
import Scroll from 'components/scroll/Scroll'
import BackTop from 'components/backtop/BackTop'
//网络请求 
import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0 , list:[]},
        'new':{page:0 , list:[]},
        'sell':{page:0 , list:[]}
      },
      currentType:'pop',
      ShowBackTop:false,
      tabOffsettop:0,
      isTabFixed:false,
      saveY:0,
      itemImgListener:null
    }
  },
  components:{
    NabBar,
    HomeSwiper,
    FeatureView,
    RecommendView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
    this._getHomeMultidata()
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
  },
  mounted(){
    this.itemImgListener = () => {
      this.$refs.scroll.scroll.refresh()
    }
    this.$bus.$on('itemImageLoad',() => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y

  },
  methods:{
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabContro2.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.ShowBackTop = position.y < -1000
      this.isTabFixed = position.y < -this.tabOffsettop
    },
    loadMore(){
      this._getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      this.tabOffsettop = this.$refs.tabControl.$el.offsetTop 
    },


    //网络请求
    _getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    _getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.scroll.scroll.finishPullUp()
    })
    }
  }
}
</script>
<style scoped>
#home {
  height: 100vh;
}
.nabber {
  background-color: #ff5777;
  font-weight: 700;
  color: #fff;
}
.tabcontro {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
}
.content {
  /* height: calc(100% - 93px);
  overflow: hidden; */
  position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
.tabactive {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
}
</style>