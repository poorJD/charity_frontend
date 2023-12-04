const spanEl = document.querySelector("main h2 span");
const txtArr = ['이 아이가 배가 부르다는 느낌을 알까요?', '누군가 곁에 있다는 따듯한 느낌을 알까요?', '아이를 바라보는 엄마의 마음은 어떨까요?', '월 3만 원의 후원으로 이 아이의 배를 채워 줄 수 있습니다. ', '후원문의 010-3198-3909'];
let index = 0;
let currentTxt = txtArr[index].split("");

// 속도 범위를 설정합니다. 숫자는 밀리초 단위입니다.
const minWriteSpeed = 50;
const maxWriteSpeed = 150;
const minDeleteSpeed = 50;
const maxDeleteSpeed = 150;

function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * (maxWriteSpeed - minWriteSpeed) + minWriteSpeed))
    } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * (maxDeleteSpeed - minDeleteSpeed) + minDeleteSpeed))
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        setTimeout(writeTxt, 1500);
    }
}
writeTxt();

//header에 active 클래스 추가
(function () {

})();//만들자마자 없애버리는 즉시실행 함수
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
    this.requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
        headerEl.classList.add('active');
    }
    else {
        headerEl.classList.remove('active');
    }
}

document.querySelector('#Auth').addEventListener('click', function() {
    // 로컬 스토리지에서 'accessToken' 키의 값을 가져옴
    const token = localStorage.getItem('accessToken');

    if (token) {
        console.log(token)
        // 토큰이 있다면 Account.html로 이동
        window.location.href = 'Account.html';
    } else {
        // 토큰이 없다면 RelLogin.html로 이동
        window.location.href = 'RelLogin.html';
    }
});

document.querySelector('#remove').addEventListener('click', function() {
    // 로컬 스토리지에서 'accessToken' 키의 값을 가져옴
    window.localStorage.removeItem("accessToken")
    window.alert('로그아웃')
});
