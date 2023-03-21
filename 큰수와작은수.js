let num1;
let num2;
let num3;
let tmp;
let maxNum;
let minNum;

tmp = prompt("첫번째 정수를 입력하세요 : ", "");
num1 = Number(tmp);
tmp = prompt("두번째 정수를 입력하세요 : ", "");
num2 = Number(tmp);
tmp = prompt("세번째 정수를 입력하세요 : ", "");
num3 = Number(tmp);

if(num1 < num2) {
    if(num2 < num3) {
        maxNum = num3;
        minNum = num1;
    } else {
        maxNum = num2;
        if(num1 < num3){
            minNum = num1;
        } else {
            minNum = num3;
        }
    }
} else { // num1 > num2
    if(num1 < num3) {
        maxNum = num3;
        minNum = num2;
    } else {
        maxNum = num1;
        if(num2 < num3){
            minNum = num2;
        } else {
            minNum = num3;
        }
    }
}

document.write("가장 작은 수 : " + minNum);
document.write("<br>가장 큰 수 : " + maxNum)