document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded")

const form = document.getElementById("registration-form")
const feedbackDiv = document.getElementById("form-feedback")

form.addEventListener("submit", function(event) {
event.preventDefault()

let username = document.getElementById("username").value.trim()
let Email = document.getElementById("email").value.trim()
let Password = document.getElementById("password").value.trim()

let isValid = true

let messages = []

if (username.length < 3) {
    isValid = false
     messages.push("Please enter a valid username!")
} 

if (Email.includes("@") === false || Email.includes(".") === false) {
    isValid = false
    messages.push("Please enter a valid email address!")
}

if (Password.length < 8) {
    isValid = false
    messages.push("Please enter a password of minimum 8 words")
}

if (isValid === true) {
    feedbackDiv.textContent = "Registration successful!"
    feedbackDiv.style.color = "#28a745"
    feedbackDiv.style.display = "block"
}else {
     feedbackDiv.innerHTML = messages.join("<br>")
     feedbackDiv.style.color = "#dc3545"
     feedbackDiv.style.display = "block"
}

})

})