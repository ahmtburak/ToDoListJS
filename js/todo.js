let addButton = document.getElementById('liveToastBtn');
let ulDOM = document.getElementById('list');
let taskDOM = document.querySelector('#task');
let listOfAll = document.querySelectorAll('li')
const closeButton = `<button onclick="removeElement(parentNode)" style="padding: 13px;" type="button" class="close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

function removeElement(erase){
    erase.remove()

    eraseStorage(erase)
}

function checkElement(){
    this.classList.toggle('checked')
}

listOfAll.forEach(e=> 
    {e.addEventListener('click', checkElement); e.innerHTML += `${closeButton}`})


addButton.addEventListener('click', function newElement() {
    if (taskDOM.value ) {
        let liDOM = document.createElement('li');
        ulDOM.appendChild(liDOM);
        $(".success").toast('show')
        liDOM.innerHTML = `${taskDOM.value}${closeButton}`
        liDOM.addEventListener('click', checkElement)

        setStorage()  
    }
    else{
        $(".error").toast('show')
        taskDOM.value=""
    }
    taskDOM.value=""

    
});

function localSelf(){
    let toDoList = JSON.parse(localStorage.getItem('toDoList'))

    if(!toDoList){toDoList = []}

    localStorage.setItem("toDoList", JSON.stringify(toDoList))
}

function setStorage(){
    let toDoList = JSON.parse(localStorage.getItem('toDoList'))

    toDoList.push(`${taskDOM.value}`)

    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

function eraseStorage(erase) {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))

    if ( toDoList.includes( erase.firstChild.textContent ) === true ) {
        let indexbul = toDoList.findIndex ( e =>
            e == erase.firstChild.textContent )
        
        toDoList.splice(indexbul, 1) 
        
        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
}
function localDOM() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"))

    toDoList.forEach( (e, index) => {
        let liDOM = document.createElement("li")
        ulDOM.append(liDOM)
        liDOM.innerHTML = toDoList[index]
        liDOM.innerHTML += closeButton
        ulDOM.addEventListener("click", checkElement)
        
        liDOM.addEventListener("click", checkElement)
    } )
}

localSelf()

localDOM()




