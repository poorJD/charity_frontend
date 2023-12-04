document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
  
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var uname = document.querySelector('input[name="uname"]').value;
    var psw = document.querySelector('input[name="psw"]').value;
    var pswRepeat = document.querySelector('input[name="psw-repeat"]').value;
  
    // 이메일 형식 검사
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById('emailError').style.display = 'block';
      return;
    } else {
      document.getElementById('emailError').style.display = 'none';
    }
  
    // 비밀번호 일치 여부 검사
    if (psw !== pswRepeat) {
      document.getElementById('passwordError').style.display = 'block';
      return;
    } else {
      document.getElementById('passwordError').style.display = 'none';
    }
  
    // 회원가입 정보를 서버로 전송
    var userData = {
      name: name,
      userid: uname,
      password: psw,
      email: email
    };
  
    axios.post('https://port-0-charity-backend-57lz2alpkfgk5p.sel5.cloudtype.app/register', userData)
      .then(function(response) {
        console.log(response.data);
        // 여기에 회원가입 성공 후 처리 로직 작성
          window.location.href = 'SuccessLogin.html';
      })
      .catch(function(error) {
        console.error(error);
        // 여기에 회원가입 실패 후 처리 로직 작성
      });
  
  });
  
  document.getElementById('goToMain').addEventListener('click', function() {
    // Replace 'main.html' with the actual URL of your main page
    window.location.href = 'main.html';
  });
  
  