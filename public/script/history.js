const listHistory = document.getElementById('listHistories')

const getHistories = () => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText)
    if (responseJson.error) {
      console.log(responseJson.message)
    } else {
      renderHistories(responseJson)
    }
  }
  xhr.onerror = function() {
    alert('Internal Server Error')
  }
  xhr.open("GET", "http://localhost:3000/apis/histories")
  xhr.send()
}

const renderHistories = (histories) => {
  listHistory.innerHTML = ""

  histories.forEach(histories => {
    listHistory.innerHTML += `
        <tr>
            <td><p class="text-center">${histories.id}</p></td>
            <td><p class="text-center">${histories.win}</p></td>
            <td><p class="text-center">${histories.lose}</p></td>
            <td><p class="text-center">${histories.draw}</p></td>
            <td><p class="text-center">${histories.userId}</p></td>
        </tr>`
  })
}

getHistories()