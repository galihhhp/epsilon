const listAllDetails = document.getElementById('allUserDetails')

const getDetails = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText)
    if (responseJson.error) {
      console.log(responseJson.message)
    } else {
      renderDetails(responseJson)
    }
  }
  xhr.onerror = function() {
    alert('Internal Server Error')
  }
  xhr.open("GET", "http://localhost:3000/apis/bios")
  xhr.send()
}

const renderDetails = (details) => {
  listAllDetails.innerHTML = ""

  details.forEach(details => {
    listAllDetails.innerHTML += `
        <tr>
            <td><p class="text-center">${details.id}</p></td>
            <td><p class="text-center">${details.name}</p></td>
            <td><p class="text-center">${details.email}</p></td>
            <td><p class="text-center">${details.gender}</p></td>
            <td><p class="text-center">${details.age}</p></td>
            <td><p class="text-center">${details.city}</p></td>
            <td><p class="text-center">${details.userId}</p></td>
        </tr>`
  })
}

getDetails()