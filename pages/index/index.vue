<template>
  <view class="content">
		
		<navigator :url="item.url" open-type="navigate" style="background-color: red; margin-bottom: 2px;" v-for="(item,index) in btnInfo"> {{item.name}}</navigator>
		
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      btnInfo:[
		  {url:'/pages/cloudDb/cloudDb',name:'云数据库操作'},
		  {url:'/pages/cloudfunc/cloudfunc',name:'云函数操作'},
		  ]
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
