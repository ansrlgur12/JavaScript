function addSubject(){
    let subject = document.createElement("li");
    subject.innerText = document.frm.subject.value;
    itemList.appendChild(subject);
    subject.addEventListener("click", function(){
        subject.remove(); // 리스트 삭제 메소드
    });

    let reset = document.getElementById("needReset");
    reset.value = null; // input창 초기화 메소드
}

const form = document.querySelectorAll("form");
for(let e of form) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소 = 하나 작성하면 나타났다 사라지는 오류 해결
        e.preventDefault();
    });
}