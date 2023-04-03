// - 메뉴는 [1] 예매하기, [2] 종료하기
// - 사용자로부터 좌석번호(index)를 입력받아 예매하는 시스템이다. (좌석은 10개이다.)
// - [v] [v] [v] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
// - 예매가 완료되면 해당 좌석 값을 1로 변경한다.
// - 이미 예매가 완료된 좌석은 재구매할 수 없다.
// - 한 좌석당 예매 가격은 12000원이다.
// - 프로그램 종료 후, 해당 영화관의 총 매출액을 출력한다.
let cnt = 0;
let total = 0;

function booking(){
    document.querySelector('#openBook').style.display = "block";	// 상세 설명 부분을 화면에 표시
}
function done(){
    const boxEls = document.querySelectorAll("p");
    for(let e of boxEls) {
        if(e.style.backgroundColor == "red") {
            cnt++;
        }
    }
    document.querySelector('#openBook').style.display = "none";	// 상세 설명 부분을 화면에 표시
    console.log(cnt);
    total = cnt;
    cnt = 0;
}
function programDone(){
    total = total * 12000;
    alert(`총 매출액은 ${total}입니다.`);
}


const boxEls = document.querySelectorAll("p");
boxEls.forEach((e) =>  {
    e.addEventListener("click", () => {
            e.style.backgroundColor = "red";
    });
});