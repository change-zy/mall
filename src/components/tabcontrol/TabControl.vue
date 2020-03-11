<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
         :key="index" 
         class="tabcontrol-item"
         :class="{active : currentIndex == index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    }
  }
}

</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
    height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 9;
}
.tabcontrol-item {
  flex: 1;
}
.active {
  color: #ff5777;
}
.active span {
  border-bottom: 3px solid #ff5777;
}
.tabcontrol-item span {
  padding: 5px;
}
</style>