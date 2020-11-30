const reset = document.getElementById('reset')
const toAllHistory = document.getElementById('toAllHistory')
const toAllDetails = document.getElementById('toAllDetails')
const listUsers = document.getElementById('listUsers')

reset.addEventListener('click', () => {
  const apis = `http://localhost:3000/apis/users/del/all`
  const options = {
    method: 'DELETE'
  }
  fetch(apis, options)
    .then(res => res.json())
    .catch(err => { throw err })
})

const toAddBio = () => {
  location.replace("http://localhost:3000/createDetail")
}

removeUser = (userId) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    getUsers()
  }

  xhr.onerror = function() {
    alert('Internal Server Error')
  }

  xhr.open("DELETE", `http://localhost:3000/apis/users/${userId}`)
  xhr.send()
}

const renderUsers = (users) => {
  listUsers.innerHTML = ""

  users.forEach(users => {
    listUsers.innerHTML += `
    <tr>
      <td><p class="text-center">${users.id}</p></td>
      <td><p class="text-center">${users.username}</p></td>
      <td><p class="text-center">${users.password}</p></td>
      <td>
        <p class="text-center">
          <button id="${users.id}" type="button" class="btn btn-success edit-btn">
            Edit
          </button>
        </p>
      </td>
      <td>
        <p class="text-center">
          <button id="${users.id}" type="button" class="btn btn-info add-btn">
            Add
          </button>
        </p>
      </td>
      <td>
        <p class="text-center">
        <button id="${users.id}" type="button" class="btn btn-danger delete-btn">
          Delete
        </button>
        </p>
      </td>
  </tr>`
  })

  const deleteBtn = document.querySelectorAll('.delete-btn')
  deleteBtn.forEach((del) => {
    del.addEventListener('click', (btn) => {
      const userId = btn.target.id
      removeUser(userId)
    })
  })

  const addBtn = document.querySelectorAll('.add-btn')
  addBtn.forEach((add) => {
    add.addEventListener('click', (btn) => {
      // const userId = btn.target.id
      toAddBio()
    })
  })
}

const getUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText)
    if (responseJson.error) {
      console.log(responseJson.message)
    } else {
      renderUsers(responseJson)
    }
  }
  xhr.onerror = function() {
    alert('Internal Server Error')
  }
  xhr.open("GET", "http://localhost:3000/apis/users")
  xhr.send()
}

getUsers()