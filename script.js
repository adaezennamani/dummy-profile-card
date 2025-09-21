// async function fetchSixthUser() {
//     try {
// let request = await fetch("https://jsonplaceholder.typicode.com/users")
// let response = await request.json();
// //console.log("response is", response);
// let sixthUser = response[5];
// let sixthUserName =sixthUser.name;
// console.log("Sixth User is", sixthUserName);
//     }catch(error) {
//         console.log("Error fetching Data")
//     }
// }

// fetchSixthUser();
//get the full name,username and so on using the method above

async function fetchName() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        const fullName = data[0]
        const userTwo = data[8]
        const thirdUser = data[3]
        document.getElementById("fullName").textContent = fullName.name
        document.getElementById("userName").textContent = fullName.username
        document.getElementById("email").textContent = fullName.email
        document.getElementById("Adress").textContent = fullName.address.street + ", " + fullName.address.suite + ", " + fullName.address.city
        document.getElementById("zipcode").textContent = fullName.address.zipcode
        document.getElementById("phone").textContent = fullName.phone
        document.getElementById("companyName").textContent = fullName.company.name

        document.getElementById("UserTwo").textContent = userTwo.name
        document.getElementById("userTwoname").textContent = userTwo.username
        document.getElementById("emailName").textContent = userTwo.email   
        document.getElementById("AdressNamw").textContent = userTwo.address.street + ", " + userTwo.address.suite + ", " + userTwo.address.city
        document.getElementById("zipcodeName").textContent = userTwo.address.zipcode
        document.getElementById("phoneName").textContent = userTwo.phone
        document.getElementById("compName").textContent = userTwo.company.name 

        document.getElementById("thirdUser").textContent = thirdUser.name
        document.getElementById("userThree").textContent = thirdUser.username
        document.getElementById("emailthree").textContent = thirdUser.email   
        document.getElementById("Adressthree").textContent = thirdUser.address.street + ", " + thirdUser.address.suite + ", " + thirdUser.address.city
        document.getElementById("zipcodethree").textContent = thirdUser.address.zipcode
        document.getElementById("phonethree").textContent = thirdUser.phone
        document.getElementById("companyNamethree").textContent = thirdUser.company.name
        console.log("Full name is", fullName)
    } catch (error) {
        console.error("Error fetching fullname")
    }
}

fetchName()

