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


if (value.length == 0){
    window.alert('olá')
}
if (value.lenght == !0){
    window.alert('ocultar')
}// Se eu não colocar esse teste dentro de uma função que monitora os valores de entrar ela não vai funcionar