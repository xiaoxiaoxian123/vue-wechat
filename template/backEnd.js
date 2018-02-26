var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mysql = require("mysql");
app.use(express.static('../public'));
//创建数据库连接
var connect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'2907lrh',
	database:'wechat'
});
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//开始连接
connect.connect();
app.post("/getChatList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query('SELECT * FROM person_info', function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//获取当前登录者的所有信息
app.post("/getMessAll",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_info where id = ${req.body.id}`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//登录
app.post("/login",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_info where phone = '${req.body.username}' and password = '${req.body.password}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//搜索
app.post("/getSearchList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM chat where mycont like '%${req.body.sea}%' or youcont like '%${req.body.sea}%'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//获取朋友圈动态
app.post("/getFriendCircleTrend",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log(req.body.id)
	var a=`select * from contact_trend where  id>=${req.body.id} order by time asc limit 1`;
	console.log(a)
	connect.query(a, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
		
	});
})
//显示联系人列表
app.post("/getcontactList",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM contact_info`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	})
});
//修改名字
app.post("/changeName",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`UPDATE person_info SET my_name='${req.body.name}' WHERE id = '${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//跳转到联系人信息页面
app.post("/showinfo",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM contact_info where id='${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});
//修改性别
app.post("/changeSex",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`UPDATE person_info SET sex='${req.body.sex}' WHERE id = '${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//根据用户id获取当前用户的动态信息
app.post("/getTrend",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_trend where person_id = ${req.body.id} ORDER BY time desc`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});
//搜索朋友
app.post("/getstrager",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	var str=`SELECT * FROM strager where phone like '%${req.body.strager_num}%'`;
	connect.query(str, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});
//添加朋友
app.post("/addstrager",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	var arr=req.body.arr;
	var aA=JSON.parse(arr);
	var Obj=aA[0];
	var str1=`INSERT INTO contact_info(id, contact_name, photo, contact_num, beizhu, phone, address) VALUES ('${Obj.id}','${Obj.contact_name}','${Obj.photo}','${Obj.contact_num}','${Obj.beizhu}','${Obj.phone}','${Obj.address}')`;
	connect.query(str1, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});
//删除添加了的联系人
app.post("/deletestrager",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	var ar=req.body.Arr;
	var oA=JSON.parse(ar);
	var obj=oA[0];
	connect.query(`DELETE FROM strager WHERE id='${obj.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});
//聊天
io.on('connection', function (socket) {

    socket.on("addUser", function (data) {
    	console.log('登录数据',data);
		connect.query(`update person_info set socketid = '${socket.id}'  where id = '${data.id}'`, function(error, results, fields) {
			if(error) throw error;
		});
	})
	socket.on("sendMess",function(data){
		console.log('聊天数据',data);
//		console.log('ss',data.message);
		connect.query(`select socketid from person_info  where id = '${data.tid}'`, function(error, results, fields) {
			if(error) throw error;
			io.sockets.sockets[results[0].socketid].emit('returnMess',data.message);
		});
		
	})
})
app.post("/getChatId",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM person_info where my_name = '${req.body.chatName}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//存聊天记录
app.post("/saveChatInfo",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`INSERT INTO chat( username, chatname, mycont, sendtime) VALUES('${req.body.username}','${req.body.chatname}','${req.body.message}','${req.body.time}')`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//将返回数据存入数据库
app.post("/saveReturnMess",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`update chat set youcont = '${req.body.returnMess}', chattime = '${req.body.time}' where id = '${req.body.id}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//获取聊天记录
app.post("/getMyChat",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	connect.query(`SELECT * FROM chat where username = '${req.body.username}' and chatname = '${req.body.chatname}'`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//监听端口
server.listen(5555);
console.log("开启服务器")
