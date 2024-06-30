let formSignup = document.getElementById('form-signup')
formSignup.addEventListener("submit",function(event){
    event.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isExisting = users.some(user => user.email === email)
    // isExisting: True/False
    if(fullname.length > 0 && email.length > 0 && pass.length > 0 && username.length > 0){
    if(isExisting){
        alert("Acount already exist");
    }else{
        users.push({fullname,username,email,pass, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSlnb_apsKjrmCGAXhTuBT792axMdB_woz0cfC6M1wg&s"})
        localStorage.setItem("users", JSON.stringify(users))
        alert("Sign up successfully!")
        window.location.href = "signin.html"
    }}else{
        alert("Sign up failed!") 
    }
})