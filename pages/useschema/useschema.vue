<template>
  <view>
    <view>1.看看schema的结构</view>
    <view>2.看看opendb</view>
    <view>3.persition、forgeinkey parentkey 中的几个默认变量名</view>
  </view>
</template>

<script>
// // 指定默认值为true
// "defaultValue": true

// // 指定强制默认值为当前服务器时间戳
// "forceDefaultValue": {
//   "$env": "now"
// }

// // 指定强制默认值为当前客户端IP
// "forceDefaultValue": {
//   "$env": "clientIP"
// }

// // 指定强制默认值为当前客户id
// "forceDefaultValue": {
//   "$env": "uid"
// }

// "foreignKey": "uni-id-users._id"
// "parentKey": "_id"   不需"doc._id"

//permission里面可以使用用的变量有 auth.uid auth.role auth.permision doc.字段 now
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
