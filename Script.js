
let pass = document.querySelector("#Pass")

let check = document.querySelector("#check")

check.addEventListener('click' , checkk)

function checkk(){

    
    pass.type = check.checked ? 'text' : 'password'
    
}
