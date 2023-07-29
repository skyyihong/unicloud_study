<template>
  <view>
    <view>1.通过创建云函数，并运行云函数来操作数据库</view>
    <button @click="getCloudFunc">操作云函数</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async getCloudFunc() {
      const ret = await uniCloud.callFunction({
        name: 'mycloudfunc',
        data: { name: 'hongyan' }
      })
      console.log(ret)
    }
  }
}
</script>

<style lang="scss" scoped></style>
