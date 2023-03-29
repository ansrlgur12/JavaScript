
function calculator() {
    const num1 = Number(document.getElementById("num1").value);
    const op = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);
    
    let result;

    switch(op) {
        case "+" : result = add(num1,num2); break;
        case "-" : result = sub(num1,num2); break; 
        case "*" : result = mul(num1,num2); break;
        case "/" : result = div(num1,num2); break;
    }
    document.getElementById("result").innerHTML = `Result : ${result}`;
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
