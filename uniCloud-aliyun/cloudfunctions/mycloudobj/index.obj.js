// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database()
const _ = db.command
const douyuCol = db.collection("douyu")
const utils = require("utils-common")
module.exports = {
	_before: function() { // 通用预处理器
		this.params = this.getParams() //函数里的参数
		console.log(this.params);
		console.log(this.getClientInfo())
		this.info = this.getHttpInfo() //获取云对象url化是 post传过去的信息
		// throw Error("错误信息")
	},

	async get(num = 1) {
		return await douyuCol.limit(num).get()
	},
	getinfo(num) {
		// return Promise.resolve(num)

		return JSON.parse(this.info.body)
	},
	btninfo() {
		return "OK"
	},
	getcommonfun() {
		const e = utils("hello world")
		return e
	},

	_after: function(error, result) {
		if (error) {
			throw error // 如果方法抛出错误，也直接抛出不处理
		}
		return result
	}
}