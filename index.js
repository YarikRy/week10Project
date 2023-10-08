let id = 0

//getting the inputs from the radio boxes
let mealTime = () => {
    let ele = document.getElementsByName('time')

    for(i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            return ele[i].value
        }
    }
}
//clearing the radio inputs for user experience
let clearRadio = () => {
    let radio = document.getElementsByName('time')
    for (i = 0; i < radio.length; i++){
        if (radio[i].checked){
            radio[i].checked = false
        }
    }
}

//delete button function to delete the appropriate row with the right id
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

//functionality for the submit button 
document.getElementById('add').addEventListener('click', () => {
    let date = new Date() //records the date at the time of the click
    let tableBody = document.getElementById('tableBody') //assigns the element with an id of tableBody to a variable tableBody
    let row = tableBody.insertRow(0) //varaible that inserts the row to the table body
    row.setAttribute('id', `item-${id}`) //sets id to the item-id where id is a variable that increases with each submit click 
    row.setAttribute('class', `slideFromBottomFast`) //sets class to the animation class
    row.insertCell(0).innerHTML = id + 1 //Numbers all of the rows
    row.insertCell(1).innerHTML = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}` //gives the time and date when you created the row
    row.insertCell(2).innerHTML = document.getElementById('food').value //gets the value from the food input
    row.insertCell(3).innerHTML = document.getElementById('calories').value //gets the value from the calories input
    row.insertCell(4).innerHTML = mealTime() //gets the inputs from the radio selectors
    let deleteBtn = row.insertCell(5) //inserts the delete button
    deleteBtn.appendChild(deleteButton(id++)) //appends the deleteButton function to the deleteBtn variable
    document.getElementById('food').value = '' //sets the food value input to blank for user experience
    document.getElementById('calories').value = '' //sets the calories value input to blank for user experience
    clearRadio() //calls the clearRadio function to clear the radio input

})