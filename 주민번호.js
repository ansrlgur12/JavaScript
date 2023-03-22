// 길이 체크, 하이픈이 있는지 체크해서
// 성별 확인 123456-1234567
// 현재 년도 - 태어난 년도 = 나이


let gender;
let age;
let year = 2023;
const date = new Date();
while(true){
    let num = prompt("주민 등록 번호를 입력하세요 : ", "");
    if(num.charAt(7) == 1 || num.charAt(7) == 3) gender = "남자";
    else if(num.charAt(7) == 2 || num.charAt(7) == 4) gender = "여자";
    else document.write("잘못입력했습니다."); break;

    age = Number(num.substring(0,2));
    if(num.charAt(7) == 1 || num.charAt(7) == 2) age += 1900;
    age = year - age;
    document.write(`<h2>성별은 ${gender}</h2>`);
    document.write(`<h2>나이는 ${age}</h2>`);
}