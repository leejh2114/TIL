const express = require('express')
const app = express()

app.listen(3000)

app.get('/products/:n', function(req, res){
   // : >> 어? 나한테 URL로 매개변수를 전달해줄 건 가보다
   // req.params
   // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
   //console.log(req.params)
   //console.log(req.params.n)
   
   let number = parseInt(req.params.n) - 10
   console.log(number) // 숫자 "숫자"

   res.json({
      num : number
   })
})

// 채널 클릭 주소 : https://www.youtube.com/watch?v=zW7gwQmqqwA
// 채널 주소 : https://www.youtube.com/@%EC%9D%B4%EB%8B%A4%EC%9D%98%EA%B2%8C%EC%9E%84%EB%B0%A9%EC%86%A1
app.get('/:nickname', function(req, res){

   const param = req.params

   res.json({
      channel : param.nickname
   })
})

