// // Fetch API : XMLHttpRequest 방식과 가장 큰 차이점은 Promise 방식으로 구현
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch(error => console.error(error));

//------------------------------------------------------------------------------------------------------------------------------
// // POST - 데이터 생성 
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method : "POST", // HTTP 요청 방식
//     body : JSON.stringify({
//         // 전송할 데이터
//         title : "테스트 Promise",
//         name : "곰돌이사육사",
//         userId : 1,
//     }),

// hearders : {
//     // 헤더 값 정의
//     "contents-type" : "application/json; charset=UTF-8", // content-type 정의
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json))

//------------------------------------------------------------------------------------------------------------------------------
// PUT : 데이터 수정

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method : "PUT", // HTTP 요청 방식
//     body : JSON.stringify({
//         // 전송할 데이터
//         title : "테스트 Promise",
//         name : "곰돌이사육사",
//         userId : 1,
//     }),
// hearders : {
//     // 헤더 값 정의
//     "contents-type" : "application/json; charset=UTF-8", // content-type 정의
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json))

//------------------------------------------------------------------------------------------------------------------------------

// //DELETE - 데이터 삭제
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method : "DELETE",
// });


//------------------------------------------------------------------------------------------------------------------------------
// Promise를 통한 비동기 제어 방법 : 결과값은 내부객체이기 때문에 then과 catch로만 접근이 가능
const successPromise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Success");
    }, 3000);
});
successPromise.then(function(value) {
    console.log(value);
});
successPromise.then((value) => console.log(value));

//------------------------------------------------------------------------------------------------------------------------------
