var pwd = window.document.getElementById('pwd')
var value = pwd.value
var show = window.document.getElementById('show')

document.getElementById("show").addEventListener("click", function(e){
    e.preventDefault()
})



function change(){
    if(pwd.type == 'password'){
        show.innerHTML = "Ocultar"
        pwd.type = 'text'   
    }else{
        pwd.type = 'password'
        show.innerHTML = "Mostrar"
    }
}
// tente armazenar dentro de um array

pwd.addEventListener('input', keep)

function keep(e){
    var x = e.target.value
    console.log(x)
}