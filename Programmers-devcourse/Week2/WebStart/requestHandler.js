const mariadb = require("./database/connect/mariadb");

function main(response){
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, rows){
        console.log(rows);
    })

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Main page Junghyun');
    response.end();
}

function Login(response){
    console.log('Login');

    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Login page Junghyun');
    response.end();
}


let handle = {}; // key : value 
handle['/'] = main;
handle['/Login'] = Login;

exports.handle = handle;
