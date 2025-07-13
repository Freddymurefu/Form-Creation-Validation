document.addEventListener("DOMContentLoaded", function() {
    fetchUserData()

})
async function fetchUserData() {
const apiUrl = "https://jsonplaceholder.typicode.com/users"

let dataContainer = document.getElementById("api-data")

try {
    const response = await fetch(apiUrl)
    const users = await response.json()
    dataContainer.innerHTML = ""

const userList = document.createElement("ul")
users.forEach(function(user) {
    const listItem = document.createElement("li")
    listItem.textContent = user.name
    userList.appendChild(listItem)
    dataContainer.appendChild(userList)

})
} catch (error) {
    console.error("Failed to fetch users", error)
    dataContainer.innerHTML = ""
    dataContainer.textContent = "Failed to load user data."
}


}
