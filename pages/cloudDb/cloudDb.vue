<template>
  <view>
    <view>云函数和云对象操作数据库不需要scheme，而客户端(clientDB)操作数据库需要scheme</view>
    <view>1.add get 操作数据库</view>
    <view>2.doc field limit orderBy操作</view>
    <view class="">3.where 多种用法 注意看看db.command中 and or的组合使用，RegExp</view>
    <view>4.update({friend.name:"test"})(字典也可以这么写来提交) update({0:"hongyan"}) (数据的提交方式)</view>
    <view>5.db.command里面的 inc(原子自增)pop push(可以加position参数指定到添加位置) shift unshift(需要用数组)，</view>
    <view>6.小程序有 exist</view>

    <button @click="operateDB">操作数据库</button>
  </view>
</template>

<script>
const db = uniCloud.database()
const usersCol = db.collection('users')
const _ = db.command
export default {
  data() {
    return {}
  },
  methods: {
    async operateDB(e) {
      //db.command进行获取操作
      // const res = await usersCol
      //   .where({
      //     age: _.gte(18)
      //   })
      //   .get()
      //1.add对数据库添加数据，与小程序不同，uniclod数据直接为对象，而不是放在data那里
      // const res = await usersCol.add({
      //   name: 'test',
      //   age: 38
      // })
      //2.get不能直接操作，需要有其他限定条件，不然会读全表数据
      // const res = await usersCol.skip(1).limit(10).get()
      // console.log(res)
      //3.db.command的一般使用
      // const res = await usersCol
      //   .where({
      //     age: _.gte(28)
      //   })
      //   .field({
      //     age: true,
      //     name: true
      //   })
      //   .orderBy('name', 'desc')
      //   .orderBy('age', 'desc')
      //   .get()
      //4.可以or或 and来联合使用
      // const res = await usersCol
      //   .where({
      //     age: _.lte(28).and(_.gte(18))
      //   })
      //   .get()
      //5.可以用friend.name 来表示内部对象的属性
      // const res = await usersCol
      //   .where({
      //     'friend.name': 'kobe1'
      //   })
      //   .get({
      //     getOne: true
      //   })

      // 6.可以使用comand的push pop shit unshift对值为数组的进行操作
      // const res = await usersCol
      //   .where({
      //     'friend.name': 'kobe1'
      //   }).update({
      //   age: _.push([1, 1, 2])
      // })

      // 7.可以使用comand的exists 为指定字段的值存在的条目
      const res = await usersCol
        .where({
          friend: _.exists(true)
        })
        .get()

      console.log(res)
    }
  }
}
</script>

<style lang="scss"></style>
