let treeHit = 0;
while(true) {
    treeHit++;
    document.write(`<p>나무를 ${treeHit}번 찍었습니다.</p>`);
    if(treeHit == 10) {
        document.write(`<p>나무를 쓰러뜨렸습니다.</p>`);
        break;
    }
}
