let h3 = document.getElementById("h3")
h3.style.textAlign = "center"
h3.style.fontFamily = "arial black"
h3.style.color = 'blue'

let h4 = document.getElementById("h4")
h4.style.textAlign = "center"
h4.style.fontFamily = "arial black"
h4.style.color = 'blue'

let h5 = document.getElementById("h5")
h5.style.textAlign = "center"
h5.style.fontFamily = "arial black"
h5.style.color = 'blue'

let h6 = document.getElementById("h6")
h6.style.textAlign = "center"
h6.style.fontFamily = "arial black"
h6.style.color = 'blue'

let cont = document.getElementById("cont")
cont.style.backgroundColor = "lightgreen"

let h1 = document.getElementById("h1")
h1.style.textAlign = "center"
h1.style.fontFamily = "Arial Narrow"

let boton1 = document.getElementById("boton1")
boton1.style.backgroundColor = "aliceblue"
boton1.style.fontFamily = "arial black"
boton1.style.borderRadius = "20px"
boton1.style.color = "black"

let boton2 = document.getElementById("boton2")
boton2.style.backgroundColor = "alicered"
boton2.style.fontFamily = "arial black"
boton2.style.borderRadius = "20px"
boton2.style.color = "black"


let his = document.getElementsByClassName("his")
for (let i = 0; i < his.length; i++) {

    his[i].style.color = 'black'
    his[i].style.fontFamily = 'arial'
    his[i].style.textJustify = 'justify'
    his[i].style.fontSize = '15pt'
}

let body = document.querySelector("body")
body.style.backgroundImage = "url('imagenes/cielo.jpg')"
body.style.backgroundAttachment = "fixed"
body.style.backgroundSize = "100% 100%"