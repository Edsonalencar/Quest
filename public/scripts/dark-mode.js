var checkbox = document.querySelector("input[name=theme]")
const Body = document.querySelector('.body')
localStorage.getItem('action', 
    checkbox.addEventListener("change", ({target}) => {
    target.checked ? active() : close()
}))

checkbox = localStorage.action

    function active(){
        //funcionalidade de atribuir a classe active para a modal
        Body.classList.add("dark")
    }
    function close(){
        //funcionalidade de remover a classe active da modal
        Body.classList.remove("dark")
    }

