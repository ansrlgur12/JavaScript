// 중복없는 로또 번호 만들기 자바스크립트로 구현하고 html과 css를 이용해 출력하기
function lotto(){
let lotto ="";
for(let i = 0; i < 7; i++){
    let num = Math.floor(Math.random() * 45) + 1;
    if(lotto.includes(num) === false) {
        lotto = lotto.concat(", ", num);
    }
    else i--;
}
let lottoNum = lotto.replace(", ", "");
let finLottoNum = lottoNum.split(", ");

document.getElementById("lotto1").innerHTML = finLottoNum[0];
document.getElementById("lotto2").innerHTML = finLottoNum[1];
document.getElementById("lotto3").innerHTML = finLottoNum[2];
document.getElementById("lotto4").innerHTML = finLottoNum[3];
document.getElementById("lotto5").innerHTML = finLottoNum[4];
document.getElementById("lotto6").innerHTML = finLottoNum[5];
document.getElementById("lotto7").innerHTML = finLottoNum[6];
}