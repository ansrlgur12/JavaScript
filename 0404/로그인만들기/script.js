function idCheck() {
    const inputId = document.getElementById("id").value;
    console.log(`${inputId}`);
    const idRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    let regId = idRegex.test(inputId);
    console.log(regId);
    if(regId == true) {
        alert("사용 가능한 아이디입니다.");
        hideIdWrong();
    } else {
        let reset = document.getElementById("id");
        reset.value = null; // input창 초기화 메소드
        showIdWrong();
    }
}
function pwdCheck() {
    const inputPwd = document.getElementById("pwd").value;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\[\]\{\}\/\(\)\.\?\<\>!@#$%^&*])[a-zA-Z\d\[\]\{\}\/\(\)\.\?\<\>!@#$%^&*]{8,20}$/;
    let regPwd = pwdRegex.test(inputPwd);
    if(regPwd == true) {
        alert("사용 가능한 비밀번호 입니다.");
        hidePwdWrong();
    } else {
        let reset = document.getElementById("pwd");
        reset.value = null; // input창 초기화 메소드
        showPwdWrong();
    }
}
function emailCheck() {
    const inputEmail = document.getElementById("email").value;
    const emailRegex = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
    let regEmail = emailRegex.test(inputEmail);
    if(regEmail == true) {
        alert("사용 가능한 이메일 입니다.");
        hideEmailWrong();
    } else {
        let reset = document.getElementById("email");
        reset.value = null; // input창 초기화 메소드
        showEmailWrong();
    }
}

function phoneCheck() {
    const inputPhone = document.getElementById("phone").value;
    const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    let regPhone = phoneRegex.test(inputPhone);
    if(regPhone == true) {
        alert("사용 가능한 전화번호 입니다.");
        hidePhoneWrong();
    } else {
        let reset = document.getElementById("phone");
        reset.value = null; // input창 초기화 메소드
        showPhoneWrong();
    }
}
function showIdWrong() {
    document.querySelector('#idWrong').style.display = "block";	
}

function hideIdWrong() {
    document.querySelector('#idWrong').style.display = "none";	  
}

function showPwdWrong() {
    document.querySelector('#pwdWrong').style.display = "block";	
}

function hidePwdWrong() {
    document.querySelector('#pwdWrong').style.display = "none";	  
}

function showEmailWrong() {
    document.querySelector('#emailWrong').style.display = "block";	
}

function hideEmailWrong() {
    document.querySelector('#emailWrong').style.display = "none";	  
}

function showPhoneWrong() {
    document.querySelector('#phoneWrong').style.display = "block";	
}

function hidePhoneWrong() {
    document.querySelector('#phoneWrong').style.display = "none";	  
}


