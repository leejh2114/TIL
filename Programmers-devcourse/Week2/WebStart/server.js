let http = require('http');
let url = require('url');

function start(route, handle){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
        //문자열을 캐치(요청받은 url)
        
    }

    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

exports.start = start;
//밖에서 start를 사용할수 있게 할께요
//여기서 선언한 start 함수를