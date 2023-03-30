// createElement() : 요소 노드를 생성 합니다.
//const aEl = document.createElement("div");
// <기준노드>.appenChild(추가할 자식 노드);
//document.body.appendChild(aEl);
//aEl.innerText = "Test";

// div 태그 생성하고 하위에 메뉴 리스트 추가하기
// 메뉴 리스트
// - 돈까스
// - 오므라이스
// - 짜장면

const div = document.createElement("div");
const h2 = document.createElement("h2");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
document.body.appendChild(div);
div.appendChild(h2);
h2.innerText = "메뉴 리스트";
div.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
li1.innerText = "돈까스";
li2.innerText = "오므라이스";
li3.innerText = "짜장면";
li4.innerText = "짬뽕";
li5.innerText = "햄버거";

const el = document.querySelector("div");
el.style.margin = "10px";
el.style.backgroundColor = "royalblue";
el.style.padding = "15px";
el.style.fontWeight = "bold";
el.style.color = "white";

const el2 = document.querySelectorAll("li");
for(let i of el2){
    i.style.margin = "10px";
}