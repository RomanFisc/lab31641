document.addEventListener('DOMContentLoaded', () => {
/// registatraion form
  const userName = document.getElementById("username")
  const email = document.getElementById("email")
  const passWord = document.getElementById("password")
  const pwCheck = document.getElementById("passwordCheck")
  const checkBox = document.getElementById("checkbox")
  const form = document.getElementById("registration")

  //setting login form
  const userLogin = document.getElementById("user-log")
  const passLogin = document.getElementById("pass-log")
  const loginForm = document.getElementById("login")
  const success = document.getElementById("successDisplay")
  const logCheck = document.getElementById("login-check")


  const errorElement = document.getElementById('errorDisplay')

  form.addEventListener('submit', (e) => {
    let messages = []

    //username validation
    const pattern = /^[a-zA-Z0-9]+$/;
    if (userName.value.trim() === "") {
      messages.push('Username must be filled out')
    } else if (userName.value.length < 4) {
      messages.push("Username must be at least 4 characters long")
    } else if (!pattern.test(userName.value)) {
      messages.push("Username must not use special characters")
    } else if (localStorage.getItem("username") === userName.value.toLowerCase()) {
      messages.push("Username already exists")
    }

    //email validation
    if (email.value.trim() === "") {
      messages.push('Email must be filled out');
    } else if (exampleDomain(email.value)) {
      messages.push('Email must not be from example.com')
    }

    //password validation
    if (passWord.value.trim().length < 12) {
      messages.push("Password must be longer than 12 characters")
    } else if (passWord.value.trim() === "password".toLowerCase) {
      messages.push("Password must not contain the word password")
    } else if (passWord.value.trim() === userName.value.trim()) {
      messages.push("Password must not contain username")
    }

    //add special character validation
    //add upper and lower validation
    //add validation to check at leastt 1 number

    //password check validation
    if (pwCheck.value.trim() === "") {
      messages.push('Password confirmation is required');
    } else if (pwCheck.value.trim() !== passWord.value.trim()) {
      messages.push('Passwords must match');
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerHTML = messages.join('<br>');
      errorElement.style.display = 'block';
    } else {
      errorElement.style.display = 'none';
    }

    localStorage.setItem("username", userName.value.toLowerCase())
    localStorage.setItem("email", email.value.toLowerCase())
    localStorage.setItem("password", passWord.value)
  })

  /////// Creating login validation
  loginForm.addEventListener('submit',(e) => {
    let messages = [] 

    if (userLogin.value.trim().toLowerCase() !== localStorage.getItem("username")) {
      messages.push("Username doesn't exist")
    }

    if (passLogin.value.trim() !== localStorage.getItem("password")){
      messages.push("Wrong password")
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerHTML = messages.join('<br>');
      errorElement.style.display = 'block';
    } else {
      e.preventDefault();
      errorElement.style.display = 'none';
      success.style.display = "block"
      loginForm.reset()

      if (logCheck.checked) {
        let validForm = "Login Successful and you will stay logged in"
        success.innerHTML = validForm;
      } else {
        let validForm = "Login Successful"
        success.innerHTML = validForm;
      }
    }

  })

});


function exampleDomain (email) {
  const exampleDomainPattern = /^[^\s@]+@example\.com$/;
  return exampleDomainPattern.test(email.toLowerCase()); 
}

console.log(localStorage.getItem("username"))
console.log(localStorage.getItem("email"))
console.log(localStorage.getItem("password"))

