let id = 0
let mealTime = () => {
    let ele = document.getElementsByName('time')

    for(i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            return ele[i].value
        }
    }
}
let clearRadio = () => {
    let radio = document.getElementsByName('time')
    for (i = 0; i < radio.length; i++){
        if (radio[i].checked){
            radio[i].checked = false
        }
    }
}

let deleteButton = (id) => {
    let btn = document.createElement('button')
    btn.className = 'btn btn-danger'
    btn.id = id
    btn.innerHTML = 'Delete'
    btn.onclick = () => {
        let eleDelete = document.getElementById(`item-${id}`)
        eleDelete.parentNode.removeChild(eleDelete)
    }
    return btn

}
document.getElementById('add').addEventListener('click', () => {
    let date = new Date()
    let tableBody = document.getElementById('tableBody')
    let row = tableBody.insertRow(0)
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = id + 1
    row.insertCell(1).innerHTML = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}`
    row.insertCell(2).innerHTML = document.getElementById('food').value
    row.insertCell(3).innerHTML = document.getElementById('calories').value
    row.insertCell(4).innerHTML = mealTime()
    let deleteBtn = row.insertCell(5)
    deleteBtn.appendChild(deleteButton(id++))
    document.getElementById('food').value = ''
    document.getElementById('calories').value = ''
    clearRadio()

})