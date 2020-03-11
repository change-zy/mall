<template>
  <nab-bar class="nav-bar">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/home/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" 
          :key="index" 
          class="title-item"
          @click="itemClick(index)"
          :class="{active : index == currentIndex }">{{item}}</div>
    </div>
  </nab-bar>
</template>

<script>
import NabBar from 'components/nabbar/NabBar'
export default {
  data(){
    return {
      titles:['商品','参数','评论','推荐']
    }
  },
  props:{
    currentIndex:{
      type:Number,
      default:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  },
  components:{
    NabBar
  }
}

</script>
<style scoped>
.nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.title {
  display: flex;
  font-size: 13px;
  width: 80%;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777;
}
.back {
  width: 50px;;
}
.back img {
  margin-top: 10px;
}
</style>