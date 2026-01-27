function aletsignup() {

  var input = document.getElementById('inp').value;
  var input2 = document.getElementById('inp2').value;
  var input3 = document.getElementById('inp3').value;
  var input4 = document.getElementById('inp4').value;
  var input5 = document.getElementById('inp5').value;
  if (input == '') {
      window.alert('Please enter your first name!')
  }
 else if (input2 == '') {
      window.alert('Please enter your last name!')
  }
  else if (input3 == '') {
      window.alert('Please enter your email!')
  }
  else if (input4 == '') {
      window.alert('Please enter your mobile number!')
  }
  else if (input5 == '') {
      window.alert('Please set your password!')
  }
  
  else {
      window.alert('Succesfully signed up, redirecting to log in...')
      window.open('LogIn-UI.html')       
      this.close();
  }
}