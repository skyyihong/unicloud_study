<template>
  <view>
    <view>1.公用模式是给云函数和云对象使用第三放模块</view>
    <view>
      注意：公用模块只能使用commonjs的模式。使用方法：1.先创建公共函数，2.然后在云函数或云对象的模块下执行npm install
      ../common/utils ,安装模块。3.在云函数或云对象里require引入使用
    </view>
    <view>*******************</view>
    <button @click="runcommmon">执行公共模块函数</button>
  </view>
</template>

<script>
const cloudobj = uniCloud.importObject('mycloudobj')
export default {
  data() {
    return {}
  },
  methods: {
    async runcommmon() {
      const ret = await cloudobj.getcommonfun()
      console.log(ret)
    }
  }
}
</script>

<style lang="scss"></style>
