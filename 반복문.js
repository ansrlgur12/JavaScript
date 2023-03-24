//let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
//
//// 기본 for 문
//for(let i = 0; i < brands.length; i++) {
//    console.log(brands[i]);
//}
//
//console.log("\n");
//// for of : 배열이나 객체를 순회, 자바의 향상 for문이랑 유사
//for(let i of brands) {
//    console.log(i);
//}
//
console.log("\n");
// for ~ in : 객채의 프로퍼티를 열거 할 때 사용하는 반복문
let person = {
    fname : "John",
    lname : "Doe" ,
    age : 25
};

for(let key in person){
    console.log(person[key]);
}