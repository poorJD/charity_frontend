document.querySelector('#loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const uname = document.querySelector('input[name="uname"]').value;
    const psw = document.querySelector('input[name="psw"]').value;
    
    axios.post('http://localhost:3001/login', {
        userid: uname,
        password: psw,
    })
    .then(function (response) {
        // 로그인 성공했을 때, 로그인 성공 페이지로 리디렉션.
        if (response.data.message === 'Logged in') {
            localStorage.setItem('accessToken', response.data.accessToken);  // 받은 액세스 토큰을 로컬 스토리지에 저장
            window.location.href = 'main.html';  // 'main.html'은 실제 로그인 성공 페이지 URL로 변경해야 합니다.
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    });