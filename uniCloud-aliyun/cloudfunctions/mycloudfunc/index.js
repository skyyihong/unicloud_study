'use strict';
const db = uniCloud.database()
const usersCol = db.collection("users")
const _ = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log("event", event);
	const result = await usersCol.where({
		age: 38
	}).update({
		age: _.inc(1)
	})
	//返回数据给客户端
	return result
};