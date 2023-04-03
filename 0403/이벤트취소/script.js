// 이벤트 취소하기 : HTML 태그 중 일부는 기본으로 이벤트가 적용되어 있다.
// 대표적으로 a태그와 form 태그가 해당 된다.
// target 속성은 이벤트가 발생한 요소를 나타냅니다.
// preventDefault() 메소드를 사용하면 태그에 기본으로 연결된 이벤트를 취소

const aEls = document.querySelectorAll("a");
for(let e of aEls) {
    e.addEventListener("click", function(e){
        // 기본 이벤트 취소
        e.preventDefault();
    });
}

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event){
    // 기본 이벤트 취소
    event.preventDefault();
});