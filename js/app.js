console.log('DOM Todo')

const usrIn = document.getElementById('user-input')
const btn = document.getElementById('submit-button')
const myList = document.getElementById('todo-list')

btn.addEventListener('click', addToList)

function addToList(evt) {
  let newLi = document.createElement('li')
  if(usrIn.value !== '') {
    newLi.textContent = usrIn.value
    myList.appendChild(newLi)
    usrIn.value = ''
  }
}

myList.addEventListener('click', removeLi)

function removeLi(evt) {
  evt.target.parentNode.removeChild(evt.target)
  console.log(evt.target)
}