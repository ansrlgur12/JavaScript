function dangchum(){
let num = Number(document.getElementById("num").value);
let dangchum = Math.floor(Math.random() * num) + 1;
document.getElementById("result").innerHTML = `${dangchum}번 응모자 <span class = "point">당첨</span>입니다!!`;
}