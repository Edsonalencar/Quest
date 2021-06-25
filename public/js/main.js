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
