function login() {
            
  var usern = document.getElementById('inp').value;
  var pass = document.getElementById('inp2').value;
  
  
  if (usern === '') {
      window.alert('Enter your username!')
  }
  else if (pass === '') {
      window.alert('Enter your password!')
  }
  else if (usern === 'user' && pass === 'password') {
      window.alert('Succesfully Logged In!')
      window.open('../main-index.html');   
      this.close();
  }
  else {
      window.alert('Incorrect username or password, Please try again!');
  }      
}

          let pass = document.getElementById('inp2');
          let showPass = document.querySelector('#eye-icon');

         showPass.onclick = function() {

          if (pass.type == "password") {
              pass.type = "text";
              showPass.classList.remove("fa-eye");
              showPass.classList.add("fa-eye-slash");
          }
          else {
              pass.type = "password" 
              showPass.classList.remove("fa-eye-slash");
              showPass.classList.add("fa-eye");
          }
         }