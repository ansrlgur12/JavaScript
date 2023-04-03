const btnEl = document.querySelector("button");
let cnt = 1;
btnEl.addEventListener("click", function(e){
    console.log("버튼이 눌려졌습니다." + e + cnt++);
    // console.log("X좌표 : " + e.clientX);
    // console.log("Y좌표 : " + e.clientY);
    // console.log("마우스가 클릭된 x좌표 : " + e.pageX);
    // console.log("마우스가 클릭된 y좌표 : " + e.pageY);
    // console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 x좌표 : " + e.screenX);
    // console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 y좌표 : " + e.screenY);
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event) {
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altKey}`);
    console.log(`shiftKey : ${event.shiftKey}`);
});

