const name = document.getElementById('nameForm')
const email = document.getElementById('emailForm')
const gender = document.getElementById('genderForm')
const age = document.getElementById('ageForm')
const city = document.getElementById('cityForm')
const userId = document.getElementById('userIdForm')
const button = document.getElementById('createBio')

// let userId = ''

const toDashboard = () => {
  location.replace("http://localhost:3000/dashboard")
}

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText)
    if (responseJson.error) {
      console.log(responseJson.message)
    } else {
      alert('Your Biodata Has Been Added')
      toDashboard()
    }
  }

  xhr.onerror = function() {
    alert('Internal Server Error')
  }

  xhr.open("POST", `http://localhost:3000/apis/bios`)
  xhr.setRequestHeader("Content-Type", "application/json")
  const biodata = {
    name: name.value,
    email: email.value,
    gender: gender.value,
    age: age.value,
    city: city.value,
    userId: userId.value
  }

  xhr.send(JSON.stringify(biodata));
})