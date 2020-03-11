<template>
<div id="category">
  <nav-bar class="nav-bar"><div slot="center">分类商城</div></nav-bar>
  <scroll class="cate-scroll">
    <div class="content">
    <tab-menu class="menu" :categories="categories" @selectItem="selectItem"/>
    <tab-centent class="tab-centent" :categoryData="categoryData"></tab-centent>
    </div>
  </scroll>
</div>
</template>

<script>
import NavBar from 'components/nabbar/NabBar'
import TabMenu from './childcomps/TabMenu'
import TabCentent from './childcomps/TabCentent'
import Scroll from 'components/scroll/Scroll'

import {getCategory,getSubcategory} from 'network/category'
export default {
  data(){
    return {
      categories:[],
      currentIndex:0,
      categoryData:{}
    }
  },
  components:{
    NavBar,
    TabMenu,
    TabCentent,
    Scroll
  },
  created(){
    this._getCategory()
  },
  methods:{
    selectItem(index){
      this._getSubcategory(index)
    },
    _getCategory(){
      getCategory().then(res => {
      console.log(res);
      this.categories = res.data.category.list
      this._getSubcategory(0)
    })
    },
    _getSubcategory(index){
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData = res.data  
      })
    }
  }
}
</script>
<style scoped>

.nav-bar {
  background-color: #ff5777;
  font-weight: 700;
  color: #fff;
}
.content {
  display: flex;
}
.menu{
  flex: 30%;
}
.tab-centent {
  flex: 70%;
}
.cate-scroll {
 position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>