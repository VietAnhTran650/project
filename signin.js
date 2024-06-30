let formSignin = document.getElementById('form-signin')
console.log(formSignin);
formSignin.addEventListener("submit",function(event){
    event.preventDefault(); 
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let auth = users.some(user => user.email === email && user.pass === pass)
    if( email.length > 0 && pass.length > 0){
        if(auth){       
            let currentUser = users.find((user)=> user.email === email && user.pass === pass)
            localStorage.setItem("currentUser", JSON.stringify(currentUser))
            alert("Logged in successfully");
            window.location.href = "index.html"
        } else{
            alert("Login failed")
        }
  }else{
        alert("Vui lòng điền đầy đủ thông tin!!") 
    }
})