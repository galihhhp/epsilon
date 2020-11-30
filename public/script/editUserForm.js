const username = document.getElementById('usernameForm')
const password = document.getElementById('passwordForm')
const button = document.getElementById('createBtn')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText)
    if (responseJson.error) {
      console.log(responseJson.message)
    } else {
      alert('Your Data Has Been Added')
    }
  }

  xhr.onerror = function() {
    alert('Internal Server Error')
  }

  xhr.open("POST", "http://localhost:3000/apis/users")
  xhr.setRequestHeader("Content-Type", "application/json")
  const user = {
    username: username.value,
    password: password.value,
  }

  xhr.send(JSON.stringify(user));
})