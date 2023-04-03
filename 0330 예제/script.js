function addSubject(){
    let subject = document.createElement("li");
    subject.innerText = document.frm.subject.value;
    itemList.appendChild(subject);
}

const form = document.querySelectorAll("form");
for(let e of form) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소
        e.preventDefault();
    });
}

// 리스트 클릭하면 삭제되는 함수 구현.