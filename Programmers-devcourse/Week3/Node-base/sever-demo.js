let http = require('http');
//모듈중에서도 내장 되어 있는 모듈도 있다 >> http는 내장 모듈
function onRequest(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);
//http는 다른 사람이 만든 모듈이기에 그 사람이 만든 규칙에 맞춰야 한다.

//http 모듈에 createServer 함수에서 할일을 다 한 다음에
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던진 거에요!
//서버를 만든다음에 onRequest 함수를 실행해줘
//콜백 함수
