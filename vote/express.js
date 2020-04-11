/*
 express.js: 引入 express 模块，设置路由
*/
var app = require('express')();
var {mongoose, User,Test1} = require("./mongoose");
app.get('/',function (request, response) { // 路由
  response.send("hello world!") // 传送HTTP响应
})
app.listen(8085) //监听8085端口，默认localhost: 127.0.0.1 || 0.0.0.0

// ###########################################

app.get("/addUser",function (request, response) {
    let data = {
      name: request.query.myinput
    }
    console.log(data)
    var addUser = new User(data)
    addUser.save()
    response.send(JSON.stringify(data))
  })