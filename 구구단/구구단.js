// let tmp = prompt("1~9 사이의 정수를 입력하세요 : ","");
// let dan = Number(tmp);
// 
// document.write(`<h2>${dan}단</h2>`);
// for(let i = 1; i < 10; i++) {
//     document.write(`<p>${dan} x ${i} = ${dan*i}</p>`)
// }

let i, j;

for(i = 2; i < 10; i++) {
    document.write('<table>');
    document.write('<tr><th>' + i + '단</th></tr>');
    for(j = 1; j < 10; j++) {
        document.write('<tr><td>' + i + ' X ' + j + ' = ' + i * j + '</td></tr>');
    }
}
document.write('</table>');