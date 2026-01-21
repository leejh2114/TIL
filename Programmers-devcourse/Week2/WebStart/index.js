let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');
// './' 쩜 슬레시란 이 같은 디렉토리, 같은 폴더 경로에 들어있는 파일

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandler.handle);