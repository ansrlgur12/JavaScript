function avg(){
let score1 = Number(document.getElementById("score1").value);
let score2 = Number(document.getElementById("score2").value);
let score3 = Number(document.getElementById("score3").value);
let score4 = Number(document.getElementById("score4").value);
let score5 = Number(document.getElementById("score5").value);

let result = getAvg(score1, score2, score3, score4, score5);
let sum = sub(score1, score2, score3, score4, score5);
document.getElementById("sum").innerHTML = `총합 : ${sum}점`;
document.getElementById("result").innerHTML = `평균 : ${result}점`;

}

function sub(a, b, c, d, e) {
    return a + b + c + d + e;
}
function getAvg(a, b, c, d, e) {
    return (a + b + c + d + e) / 5;
}