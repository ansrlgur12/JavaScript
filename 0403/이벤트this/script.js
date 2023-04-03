const pEls = document.querySelectorAll("p");
// for(let el of pEls)
pEls.forEach((el) => {
    el.addEventListener("click", () => {
        if(el.style.color == "red") {
            el.style.color = "black";
        } else {
            el.style.color = "red";
        }
    });
});