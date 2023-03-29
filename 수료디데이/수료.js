let day = new Date("2023-07-25");
let now = new Date();

let dTime = day.getTime();
let nTime = now.getTime();
let remaintime = dTime - nTime;
remaintime = Math.round(remaintime/(1000*60*60*24));

document.getElementById("remain-time").innerHTML = `<p class = "title">수료</p><p>D - ${remaintime}일</p>`;
//document.querySelector("#remain-time").innerText = remaintime;
