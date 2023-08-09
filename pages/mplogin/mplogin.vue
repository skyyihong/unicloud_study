<template>
  <view></view>
</template>

<script>
const uniIdCo = uniCloud.importObject('uni-id-co')
export default {
  data() {
    return {}
  },
  methods: {
    getCode() {
      // #ifdef MP-WEIXIN
      uni.login({
        success: async (res) => {
          // console.log(res.code)
          await this.mpLogin(res.code)
        }
      })
      // #endif
    },
    async mpLogin(code) {
      const res = await uniIdCo.loginByWeixin({ code })
      console.log('mplogin', res)
    }
  },
  onLoad(options) {
    this.getCode()
  }
}
</script>

<style lang="scss"></style>
