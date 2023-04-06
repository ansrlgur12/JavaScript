const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의
const data = {
    id : "jks2024",
    pwd : "sphb8250",
    name : "곰돌이사육사",
    addr : "경기도 수원시"
}
xhr.send(JSON.stringify(data)); // XMLHttpRequest 객체를 사용하여 서버로 HTTP 요청을 보내는 메소드


xhr.onload = () => { // XMLHttpRequest 객체에서 요청이 공적으로 완료되었을 때 호출되는 핸들러
    if(xhr.status === 201) { 
        // 정상적으로 응답되면 status가 200
        const res = JSON.parse(xhr.response); 
        console.log(res);
    } else { // 에러 발생
        console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
    }
}
