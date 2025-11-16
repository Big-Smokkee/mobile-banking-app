// login button functionality
const mobileNumber = +8801906780349;
const pinNumber = 1234;
// password from form


document.getElementById("loginBtn").addEventListener('click', function (event) {
    event.preventDefault();
    let inputNumber = document.getElementById("inputNumber").value;
    inputNumber = parseInt(inputNumber);
    let inputPassword = document.getElementById("inputPassword").value;
    inputPassword = parseInt(inputPassword);
    if (mobileNumber === inputNumber && pinNumber === inputPassword) {
        window.location.href = "./home.html";
    }
    else
        alert("Wrong credentail provided");
});