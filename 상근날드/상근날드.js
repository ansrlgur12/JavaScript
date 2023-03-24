let hamburger = [];
let drink = [];
let totalPrice;
for(let i = 0; i < 3; i++) {
    tmp = prompt("햄버거 3개의 가격을 입력하세요 (" + i + "회입력)");
    price = Number(tmp);
    hamburger.push(price);
}
for(let i = 0; i < 2; i++) {
    tmp = prompt("음료수 2개의 가격을 입력하세요 (" + i + "회입력)");
    price = Number(tmp);
    drink.push(price);
}

let minHam = hamburger[0];
let minDrink = drink[0];


for(let i = 0; i < hamburger.length; i++) {
    if(minHam > hamburger[i]) minHam = hamburger[i];
}
for(let i = 0; i < drink.length; i++) {
    if(minDrink > drink[i]) minDrink = drink[i];
}
totalPrice = minHam + minDrink - 50;
document.write(`<h2>상근 버-어거</h2><p>가장 저렴한 햄버거 가격 : ${minHam}원<br>가장 저렴한 음료수 가격 : ${minDrink}원<br>총 금액 : ${totalPrice}원`);