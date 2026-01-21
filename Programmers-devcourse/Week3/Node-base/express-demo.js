const express = require('express')
const app = express()

// API 테스트
//메소드는 GET + URL은  "/"
app.get('/test', function(req, res){
    res.send('TEST SUCCESS')
})

// API : GET + "http://localhost:3000/test"
//"TEST SUCCESS"

app.get("/hello", function(req, res){
    res.json({
        say : '안녕하세요'
    })
})

app.get("/bye", function(req, res){
    res.json({
        say: '안녕히 가세요' 
    })
})

// get 메소드로, 'nicetomeetyou' 메소드가 날아오면
// 매개변수로 전달받은 콜백 함수를 호출하겠어. >> 서버에 셋팅
app.get("/nicetomeetyou", function(req, res){
    res.send("만나서 반갑습니다.")
})

//서버셋팅 : 포트 넘버(번호) 3000으로 셋팅
app.listen(3000)

let nodejsBook = {
 title : "Node.js를 공부해보자",
 price : 20000,
 description : "이 책 좋음 왜? 김송아가 지음"
}

app.get('/products/1', function(req, res){
    res.json(nodejsBook)
})