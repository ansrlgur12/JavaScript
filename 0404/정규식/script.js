// 정규 표현식(regular expression) : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴 입니다.

// const regexp = /World/;
// const regexp = new RegExp("World");
// let str = "Hello World! World!";
// const re = /World/;
// console.log(re.test(str)); // 해당 문자열의 포함 여부를 true/false로 반환
// console.log(str.search(re)); // 해당 문자열의 시작 위치 인덱스를 반환


// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약에 패턴과 일치하는 문자열이 없으면 null 반환

// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
// let secondRst = /가장큰+/.exec(targetStr); 
// console.log(firstRst);
// console.log(secondRst);


// test() 메소드 : 인수로 전달된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 true, 없으면 false

// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let firstRst = /가장+/.test(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
// let secondRst = /가장큰+/.test(targetStr); 
// console.log(firstRst);
// console.log(secondRst);


// 전화번호 검사하기
// \d : 숫자를 의미
// {} : 안의 숫자는 개수를 의미
// let inputNum = "010-5500-4146";
// const regex = /^\d{3}-\d{4}-\d{4}$/;
// let rst = regex.test(inputNum);
// console.log(rst);

// 전화번호 추출하기 : match() : 주어진 문자열을 처음부터 패턴 매칭을 수행
// const inputText = "안녕하세요. 제 번호는 010-5006-4146 입니다.  연락 주세요";
// const regex = /\d{3}-\d{4}-\d{4}/;
// let regNumber = inputText.match(regex);
// console.log(regNumber);

// 전화번호 여러개 추출하기(g)
// \d{2,3} : 숫자 2~3 개로 시작
// g : 매칭되는 모든 항목 찾기
// const inputText = "안녕하세요. 제 번호는 010-5006-4146, 031-304-9991, 010-5006-4146 입니다."
// const regex = /\d{2,3}-\d{3,4}-\d{4}/g;
// let regNumber = inputText.match(regex);
// console.log(regNumber);
// for(let num of regNumber) {
//     console.log(num);
// }

// 정규식 주요 패턴에 대한 사용 예제
// const regex1 = /오늘의/; // 단순 글자 찾기
// const regex2 = /010/g; // 모두 찾기
// const regex3 = /[a-zA-Z]/g; // 모든 알파벳 대소문자 찾기
// const regex4 = /[^0-9]/g; // 숫자가 아닌 문자 모두 찾기
// const regex5 = /[ㄱ-ㅎ가-힣]/g;
// const inputText = "안녕하세요. 제s 번호는 010-5006-4146, 031-304-9991, 010-5006-4146 입니다ㅋ." 
// let rst = inputText.match(regex5);
// console.log(rst);

// 웹사이트 주소 정규식 검사하기
// http:// 나 https://로 시작하고, 알파벳, 언더스코어(_), 하이픈(-), dot(.)으로 이루어짐
// /https$:\/\/[\w\-\.]+/g
const text = "구입문의는 : http://gogumarket.com https://google.com 010-5006-4146 입니다.";
const regexp = /https?:\/\/[\w\-\.]+/g;
let rst = text.match(regexp);
console.log(rst);