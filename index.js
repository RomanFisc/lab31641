document.addEventListener('DOMContentLoaded', () => {
/// registatraion form
  const userName = document.getElementById("username")
  const email = document.getElementById("email")
  const passWord = document.getElementById("password")
  const pwCheck = document.getElementById("passwordCheck")
  const checkBox = document.getElementById("checkbox")
  const form = document.getElementById("registration")

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
    }

    //email validation
    if (email.value.trim() === "") {
      messages.push('Email must be filled out');
    }

    //password validation
    if (passWord.value.trim().length < 12) {
      messages.push("Password must be longer than 12 characters")
    }

    if (passWord.value.trim() === "password".toLowerCase) {
      messages.push("Password must not contain the word password")
    }

    if (passWord.value.trim() === userName.value.trim()) {
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
  })

  ///
});