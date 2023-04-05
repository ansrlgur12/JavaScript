// 객체 생성
const xhr = new XMLHttpRequest();
xhr.open("POST", "URL 경로"); // IP주소, port번호, 백앤드가 수신할 컨트롤러
xhr.setRequestHeader("contents-type", "application/json");
const data = {
    id : 100,
    title : "비동기통신 연습하기",
    author : "곰돌이사육사"
};

xhr.send(JSON.stringify(data));


