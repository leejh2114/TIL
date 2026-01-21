var figlet = require("figlet")

figlet("Hello junghyun" , function (err, data) {
    //익명의 함수를 쓰는 이유 = 이 함수를 쓸 일이 다른 데는 없어서...
    //figlet만든 사람이, 매개변수로 함수를 받기로 했기 떄문

    //첫번째 매개변수 "어쩌구저쩌구" 라는 문자열을 받아서,
    //"아스키 아트를 만든 다음에"
    //두번째 매개변수 function 함술를 실행 = 콜 백
    
    if (err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    //에러가 났을때 Something~ 을 찍고, err가 어떤것인지 보여주고 (dir) 
    console.log(data);
    //에러가 아니라면 data값을 콘솔에 찍어주고

});

//매개 변수에 함수가 들어감
