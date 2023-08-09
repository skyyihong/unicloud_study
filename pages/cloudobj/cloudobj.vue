<template>
  <view>
    <view>_before _after函数的使用，包括throw做为返回值，在_before获取参数方法</view>
    <view>this.getHttpInfo() this.params()</view>
    <button @click="clickCloudObj">操作云对象</button>
    <view class="">*******************</view>
    <button @click="btninfo">btninfo</button>
  </view>
</template>

<script>
const cloudObj = uniCloud.importObject('mycloudobj')
export default {
  data() {
    return {}
  },
  methods: {
    async clickCloudObj() {
      console.log(await cloudObj.get(1))
    },
    async getinfo() {
      const ret = await cloudObj.getinfo({ name: 'hongyan', age: 18 })
      console.log(ret)
    },
    async btninfo() {
      console.log(await cloudObj.btninfo())
    }
  }
}
</script>

<style lang="scss" scoped></style>
