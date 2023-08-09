<template>
  <view class="content">
		<view>登录云数据库页面需要登录，admin123/admin1234</view>
		<navigator :url="item.url" open-type="navigate" style="background-color: pink; margin-bottom: 2px;" v-for="(item,index) in btnInfo"  :key="index"> {{item.name}}</navigator>
		
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
		  {url:'/pages/cloudobj/cloudobj',name:'云对象操作'},
		  {url:'/pages/useschema/useschema',name:'云数据库schema操作'},
		  {url:'/pages/commmodule/commmodule',name:'云公用模块'},
		  {url:'/pages/jql_config/jql_config',name:'JQL语法使用'},
		  {url:'/pages/mplogin/mplogin',name:'小程序登录'}
		  ]
    }
  },
  onLoad(options) {
	  // uniCloud.onNeedLogin(res=>{
		 //  console.log(res)
	  // })
  },
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
