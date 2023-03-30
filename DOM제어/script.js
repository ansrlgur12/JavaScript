// 메소드로 노드를 선택하는 방법

// getElementById("아이디") : id 속성값과 일치하는 요소 노드 1개만 선택
const el = document.getElementById("title");
//console.log(el);

// getElementsByClassName("클래스") : class 속성값과 일치하는 요소 노드 모두 선택
// 여러개의 요소 노드가 선택되며 배열과 유사한 형태로 관리 됨
const classEl = document.getElementsByClassName("text");
//console.log(classEl[0]);

// 향상된 for문과 유사
for(let el of classEl) {
    //console.log(el);
}

// getElementByTagName("태그명") : 태그명과 일치하는 요소 노드를 모두 선택
const tagEl = document.getElementsByTagName("p");
for(let el of tagEl) {
    //console.log(el);
}

// CSS 선택자로 사용하기 : query메소드(querySelector, querySelectorAll)
const qEl = document.querySelector(".box-1");
//console.log(qEl);

const qElS = document.querySelector(".box-1 .text:nth-child(2)").style = "color : red";
//console.log(qElS);

const qEls2 = document.querySelectorAll(".box-1 .text");
//console.log(qEls2[0]);
//console.log(qEls2[1]);

// -------------------------------------------------------
// 노드 조작하기

// textContent : 요소 노드의 모든 텍스트에 접근
// innerText : 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트 접근
// innerHTML : 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트 접근
let txtCont = document.getElementById("title2").textContent;
let inText = document.getElementById("title2").innerText;
let inHtml = document.getElementById("title2").innerHTML;
console.log(txtCont);
console.log(inText);
console.log(inHtml);

document.getElementById("title2").textContent;
document.getElementById("title2").innerText;
document.getElementById("title2").innerHTML = `<h1>test</h1>`;

// 스타일 조작하기 : 선택된 노드의 스타일(CSS)을 지정하거나 변경
const sEl = document.querySelectorAll(".text");

for(let el of sEl) {
    el.style.backgroundColor = "royalblue";
    el.style.fonSize = "50px";
    el.style.color = "white";
    el.style.fontWeight = "bold";
}
