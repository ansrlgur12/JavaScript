// 길이 체크, 하이픈이 있는지 체크해서
// 성별 확인 123456-1234567
// 현재 년도 - 태어난 년도 = 나이

let num 
let gender;
let age;
while(true){
    num = prompt("주민 등록 번호를 입력하세요 : ", "");
    if(num.length != 14) alert("입력 오류 : 다시 입력하세요");
    else {
        if(num.indexOf("-") == -1) alert("하이픈이 누락되었습니다.");
        else break;
    }
}
let frontnum = num.charAt(7);
if(frontnum == 1 || frontnum == 3) gender = "남자";
else if(frontnum == 2 || frontnum == 4) gender = "여자";
else document.write("잘못입력했습니다.");

age = Number(num.substring(0,2));
if(frontnum == 1 || frontnum == 2) age += 1900;
else age += 2000;

// 현재날짜 가져오기

const date = new Date(); // 날짜 객체에서 현재 시간 정보 읽어 오기
const currYear = date.getFullYear();
age = currYear - age;

document.write(`<h2>성별은 ${gender}</h2>`);
document.write(`<h2>나이는 ${age}</h2>`);
document.write(`<p class = 'box'> 성별 : ${gender} <br> 나이 : ${age} </p>`);