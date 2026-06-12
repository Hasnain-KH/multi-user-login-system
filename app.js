let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let sign_up = document.querySelector("button");
let login = document.getElementById("login")

sign_up.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    Swal.fire({
        title: "Sign-up Successfully !",
        icon: "success",
        draggable: true
    }).then(() => {
        window.location.href = "./pages/login.html"
    })
})

<<<<<<< HEAD
login.addEventListener("click", function (e) {
    console.log(e);
})
=======
// -----Shahzaib----->

let contentBox = document.querySelector(".content-container")
let get_btn = document.getElementById("get-btn")

get_btn.addEventListener("click" , handleGetStarted)

function handleGetStarted()
{
    contentBox.innerHTML = `
    <h1> Testing </h1>
    `
}
>>>>>>> eeea6d2e9fcc34117a9d5cafaee9ecc8b4fc7e77
