function addSubject(){
    let subject = document.createElement("li");
    subject.innerText = document.frm.subject.value;
    itemList.appendChild(subject);
    subject.addEventListener("click", function(){
        subject.remove();
    });

    let reset = document.getElementById("needReset");
    reset.value = null;
}

const form = document.querySelectorAll("form");
for(let e of form) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소
        e.preventDefault();
    });
}

const list = document.querySelectorAll("li");
for(let e of list) {
    e.addEventListener("click", function(){
        e.style.color = "red";
    });
}