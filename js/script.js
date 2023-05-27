let users_arr = [];
function Users (name, surname, email, password, confirmpassword){
    this.sayname = name;
    this.saysurname = surname;
    this.sayemail = email;
    this.saypassword = password;
    this.sayconfirmpassword = confirmpassword
}
let name_input = document.getElementById("name_inp")
let surname_input = document.getElementById("surname_inp")
let email_input = document.getElementById("email_inp")
let password_input = document.getElementById("password_inp1")
let confirmpassword_input = document.getElementById("password_inp2")
let signup_button = document.getElementById("regist_btn")
let name=surname=email=username=password=confirmpassword=""
let login_div = document.getElementById("login_box")
let signup_div = document.getElementById("signup_box")
let navbar_button1 = document.getElementById("navbar_btn1")
let navbar_button2 = document.getElementById("navbar_btn2")
let email_input2 = document.getElementById("login_email")
let password_input2 = document.getElementById("password_login")
let login_button = document.getElementById("login_btn")
let navbar_logo_click_render = document.getElementById("navbar_span_img")
navbar_logo_click_render.onclick = () => {
    location.reload()
}
login_div.style.display = "none"
navbar_button1.onclick=()=>{
    login_div.style.display = "block"
    signup_div.style.display = "none"
}
navbar_button2.onclick=()=>{
    login_div.style.display = "none"
    signup_div.style.display = "block"
}
signup_button.onclick=()=>{
    if(name_input.value == ""){
        name_input.style.border = "3px solid red"
    }
    else if(!isNaN(name_input.value)){
        name_input.style.border = "3px solid red"
    }
    else{
        name_input.style.border = ""
        name=name_input.value
        users_arr.push(name_input.value)
    }
    if(surname_input.value == ""){
        surname_input.style.border = "3px solid red"
    }
    else if(!isNaN(surname_input.value)){
        surname_input.style.border = "3px solid red"
    }
    else{
        surname_input.style.border = ""
        surname=surname_input.value
        users_arr.push(surname_input.value)
    }
    let regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA   -Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(!regexp.test(email_input.value)){
        email_input.style.border = "3px solid red"
    }
    else if(!isNaN(email_input)){
        email_input.style.border = "3px solid red"
    }
    else if(email_input.value == ""){
        email_input.style.border = "3px solid red"
    }
    else{
        email_input.style.border = ""
        email=email_input.value
        users_arr.push(email_input.value)
    }
    if(password_input.value == ""){
        password_input.style.border = "3px solid red"
    }
    else{
        password_input.style.border = ""
        password=password_input.value
        users_arr.push(password_input.value)
    }
    if(confirmpassword_input.value == ""){
        confirmpassword_input.style.border = "3px solid red"
    }
    else if(password_input.value !== confirmpassword_input.value){
        password_input.style.border = "4px dashed red"
        confirmpassword_input.style.border = "4px dashed red"
    }
    else{
        confirmpassword_input.style.border = ""
        confirmpassword=confirmpassword_input.value
        users_arr.push(confirmpassword_input.value)
        console.log(users_arr)
        login_div.style.display = "block"
        signup_div.style.display = "none"
        name_input.value = ""
        surname_input.value = ""
        email_input.value = ""
        password_input.value = ""
        confirmpassword_input.value = ""
    }
}




let button_password_input_open1 = document.getElementById("btn_eyes1")
let icon_open1 = document.getElementById("eyes_open1")
let icon_close1 = document.getElementById("eyes_close1")
icon_open1.style.opacity="1"
icon_close1.style.opacity="0"
let button_open_close_eyes_score_forWorks = 0

button_password_input_open1.onclick = () => {
    button_open_close_eyes_score_forWorks++
    if(button_open_close_eyes_score_forWorks%2==1){
        icon_open1.style.opacity="0"
        icon_close1.style.opacity="1"
        password_input.setAttribute("type", "text")
    }
    else{
        icon_open1.style.opacity="1"
        icon_close1.style.opacity="0"
        password_input.setAttribute("type", "password")
    }
}


let button_password_input_open2 = document.getElementById("btn_eyes2")
let icon_open2 = document.getElementById("eyes_open2")
let icon_close2 = document.getElementById("eyes_close2")
icon_open2.style.opacity="1"
icon_close2.style.opacity="0"
let button_open_close_eyes_score_forWorks2 = 0
button_password_input_open2.onclick = () => {
    button_open_close_eyes_score_forWorks2++
    if(button_open_close_eyes_score_forWorks2%2==1){
        icon_open2.style.opacity="0"
        icon_close2.style.opacity="1"
        confirmpassword_input.setAttribute("type", "text")
    }
    else{
        icon_open2.style.opacity="1"
        icon_close2.style.opacity="0"
        confirmpassword_input.setAttribute("type", "password")
    }
}



let button_password_input_open3 = document.getElementById("btn_eyes3")
let icon_open3 = document.getElementById("eyes_open3")
let icon_close3 = document.getElementById("eyes_close3")
icon_open3.style.opacity="1"
icon_close3.style.opacity="0"
let button_open_close_eyes_score_forWorks3 = 0

button_password_input_open3.onclick = () => {
    button_open_close_eyes_score_forWorks3++
    if(button_open_close_eyes_score_forWorks3%2==1){
        icon_open3.style.opacity="0"
        icon_close3.style.opacity="1"
        password_input2.setAttribute("type", "text")
    }
    else{
        icon_open3.style.opacity="1"
        icon_close3.style.opacity="0"
        password_input2.setAttribute("type", "password")
    }
}
let mega_container_works = document.getElementById("login_signup_container")
let user_rezult_div = document.getElementById("rezult_login_signup")
let user_name = document.getElementById("user_rezult_name")
let user_username = document.getElementById("user_rezult_username")
let user_password = document.getElementById("user_rezult_password")
user_rezult_div.style.display="none"
let UsersCount = 0;
login_button.onclick=()=>{
    UsersCount++
    if(users_arr.slice(2, 3) !== email_input2.value){
        alert("Email sxal e")
    }
    else if(users_arr.slice(4) !== password_input2.value){
        alert("Passwordy sxal el")
    }
    if(users_arr.slice(2, 3) == email_input2.value && users_arr.slice(4) == password_input2.value){
        // console.log(users_arr.slice(2, 3),     email_input2.value , users_arr.slice(4),   password_input2.value)
        user_rezult_div.style.display="block"
        user_name.innerText = `Name: ${users_arr.slice(0, 1)};`
        user_username.innerText = `Surname: ${users_arr.slice(1, 2)};`
        user_password.innerText = `Password: ${users_arr.slice(4)};`
        email_input2.value == ""
        password_input2.value == ""
        login_div.style.display="none"
        signup_div.style.display="none"
        localStorage.setItem(`User${UsersCount}`, `${JSON.stringify(users_arr)}`)
    }
    if(email_input2.value == "" && password_input2 == ""){
        email_input2.style.border = "1px solid red"
        password_input2.style.border = "1px solid red"
        login_div.style.display="block"
        user_rezult_div.style.display="none"
    }

}



console.warn("%c         STOP DONT TUCH ❗❗❗❗❗              ", "font-size:60px;color:red;background-color:#000;")
console.warn("%c         ERROR ERROR ERROR ❗❗❗❗❗              ", "font-size:60px;color:red;background-color:#000;")
console.warn("%c         404 404 404 404 404 ❗❗❗❗❗              ", "font-size:60px;color:red;background-color:#000;")
console.warn("%c         ERROR ERROR ERROR ❗❗❗❗❗              ", "font-size:60px;color:red;background-color:#000;")
console.warn("%c         04 404 404 404 404 ❗❗❗❗❗              ", "font-size:60px;color:red;background-color:#000;")