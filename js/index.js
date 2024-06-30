let auth = JSON.parse(localStorage.getItem('currentUser'))
let sign_up_button = document.getElementById('sign_up_button')
let sign_out = document.getElementById('sign_out')
let imgprofile = document.getElementById('imgprofile')
console.log(auth)
console.log(sign_up_button);

if(auth){
    sign_up_button.style.display = "none"
    welcome.innerText = auth.fullname   
    imgprofile.src = auth.image
}else{
    sign_up_button.style.display = "block"
    sign_out.style.display = "none"
    imgprofile.style.display = 'none'

}
function handlesignOut (){
    localStorage.removeItem('currentUser')
    window.location.href ='signin.html'
}
sign_out.addEventListener('click', handlesignOut)