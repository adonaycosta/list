const addItemButton = document.getElementById('addItemButton')
const newItem = document.getElementById('add-item')
const list = document.querySelector('.list')


function addItemList(item) {
  const li = document.createElement('li')

  li.innerHTML = 
  `
    <input type="checkbox" id="checkbox">
    <span>${item}</span>
    <button class="removeItem">
    <img src="assets/remove.svg" alt="Remover item">
    </button>
  `;

  list.appendChild(li)


  const removeButton = li.querySelector('.removeItem')
  removeButton.addEventListener('click', () => {
    li.remove()

    const removeAlert = document.getElementById('removeAlert')
    removeAlert.style.display = "flex"
  })

  const closeAlert = document.getElementById('closeAlert')
  closeAlert.addEventListener('click', () => {
    removeAlert.style.display = "none"
  })

}





addItemButton.addEventListener('click', (event) => {
  event.preventDefault()

  const item = newItem.value.trim()

  

  if(item) {
    addItemList(item);
    newItem.value = "";
  }

})