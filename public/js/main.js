//Dark Mode//

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    whiteBlue: getStyle(html, "--white-blue"),
    colorText: getStyle(html, "--color-text"),
    shadowBotton: getStyle(html, "--shadow-botton"),
    greyDark: getStyle(html, "--grey-dark"),
    detail: getStyle(html, "--detail"),
    ligthBlue: getStyle(html, "--ligth-blue"),
    

    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
}

const darkMode = {
    whiteBlue: "#110920",
    colorText: "#FBFCFF",
    shadowBotton: "#02c3ee",
    greyDark: "#fbfcff80",
    detail: "#FBFCFF",
    ligthBlue: "#1a0e30",

    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    
    
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

// MODAL //

import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .modal-buttons .confirm-buttom')


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check") 

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})


/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    //abrir modal
    modal.open()
}
 