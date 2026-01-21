if (true){
    var num1 = 7;
    const num2 = 3; // 블록 {} 스코프를 가지고 있다. 즉 중괄호를 기준으로 그 안에서 선언되었다면 그 밖에서는 사용할 수 없다.
    //const 상수값을 넣어야함 >> 넌 영원히 값이 3이란다. 초기화 이후 값을 못 바꾼다.
    let num3 = 5; // 블록 {} 스코프 let 변수도 마찬가지 선언된 중괄호 밖에서는 사용할 수 없다. 초기화 이후 값 바꿀 수 있다.

    //num2 = 10;
    num3 = 21;

    console.log(num1 + " X " + num2 + " = " + num3);
    console.log(`${num1} X ${num2} = ${num3}`); //템플릿 문자열 문자열의 틀을 만들어주고 거기에 변수를 담아줌
}


console.log(num1);

//console.log(num2);

//console.log(num3);