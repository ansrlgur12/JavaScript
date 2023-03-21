let string = "Hello, JavaScript !!!";
console.log(string);

let string2 = "저는 '아이브 안유진' 입니다.";
console.log(string2);

let string3 = '저는 "르세라핌 김채원" 입니다.';
console.log(string3);

let name1 = "곰돌이사육사";
let string4 = `저는 ${name1}입니다.`;
console.log(string4);

let addr = "경기도 수원시";
let name2 = "곰돌이";
console.log("저의 이름은 " + name2 + "이고, 주소는 " + addr + "입니다.");

let 인사말 = "안녕하세요 \'곰돌이사육사.`님..";
console.log(인사말);

let string22 = "\n\n\n이스케이프 문자를 이용해서\n줄 바꿈하고 싶어요";
console.log(string22);

// ES6에서 추가된 템플릿 문자열 사용하기
let dan = 3;
let gugu = 8;
let rst = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
console.log(rst); 

// 숫자형 (Number) : 자바스크립트는 정수와 실수를 구분하지 않고 전부 하나의 숫자 자료형으로 취급 합니다.
let num1 = 10;
let num2 = 0.1;
console.log(num1 + num2);
console.log(num2);

let sum = 0.1 + 0.2;
console.log(sum);
