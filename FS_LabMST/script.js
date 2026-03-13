let nameInput = document.getElementById("name")
let amountInput = document.getElementById("amount")
let categoryInput = document.getElementById("category")
let table = document.getElementById("expenseTable")
let totalDisplay = document.getElementById("total")
let addBtn = document.getElementById("addBtn")
let updateBtn = document.getElementById("updateBtn")
let totalBtn = document.getElementById("totalBtn")
let selectedRow = null

addBtn.addEventListener("click", addExpense)
updateBtn.addEventListener("click", updateExpense)
totalBtn.addEventListener("click", calculateTotal)
table.addEventListener("click", function(event){
if(event.target.classList.contains("deleteBtn")){
deleteExpense(event)
}
if(event.target.classList.contains("editBtn")){
editExpense(event)
}
})

function addExpense(){
let name = nameInput.value
let amount = amountInput.value
let category = categoryInput.value
if(name=="" || amount==""){
alert("Fill all fields")
return
}
let row = table.insertRow()
row.insertCell(0).innerHTML = name
row.insertCell(1).innerHTML = amount
row.insertCell(2).innerHTML = category
row.insertCell(3).innerHTML =
`<button class="editBtn">Edit</button>
<button class="deleteBtn">Delete</button>`
clearFields()
}

function deleteExpense(event){
let row = event.target.parentElement.parentElement
table.deleteRow(row.rowIndex)
}

function editExpense(event){
selectedRow = event.target.parentElement.parentElement
nameInput.value = selectedRow.cells[0].innerHTML
amountInput.value = selectedRow.cells[1].innerHTML
categoryInput.value = selectedRow.cells[2].innerHTML
}

function updateExpense(){
if(selectedRow == null){
alert("Select a row to update")
return
}
selectedRow.cells[0].innerHTML = nameInput.value
selectedRow.cells[1].innerHTML = amountInput.value
selectedRow.cells[2].innerHTML = categoryInput.value
selectedRow = null
clearFields()
}

function calculateTotal(){
let total = 0
for(let i=1;i<table.rows.length;i++){
let amount = table.rows[i].cells[1].innerHTML
total += Number(amount)
}
totalDisplay.innerHTML = total
}

function clearFields(){
nameInput.value=""
amountInput.value=""
}