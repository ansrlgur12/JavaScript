function printInfo() {
    console.log(`웹 브라우저 너비 : ${window.innerWidth}`);
    console.log(`웹 브라우저 높이 : ${window.innerHeight}`);
    console.log(`웹 브라우저 창의 너비 : ${window.outerWidth}`);
    console.log(`웹 브라우저 창의 높이 : ${window.outerHeight}`);
    console.log(`웹 브라우저 창 위쪽 면과 모니터 사이의 간격 :  ${window.screenTop}/${window.screenY}`);
    console.log(`웹 브라우저 창 왼쪽 면과 모니터 사이의 간격 : ${window.screenLeft}/${window.screenX}`);
    console.log(`웹 브라우저 창의 스크롤 가로 위치(scrollX): ${window.scrollX}`);
    console.log(`웹 브라우저 창의 스크롤 세로 위치(scrollY): ${window.scrollY}`);
}

function popup() {
    window.open('popup.html', "팝업", "width = 200, height = 100");
}

function sTo() {
    window.scrollTo(100,200);
}

function sBy() {
    window.scrollBy(100,200);
}
