document.getElementById("addMoneyBtn").addEventListener('click', function (event) {
    event.preventDefault();
    let balancePosition = document.getElementById("availableBalance");
    let balance = balancePosition.innerText;
    balance = parseInt(balance);
    const bankName = document.getElementById("bankName").value;

    const accountNumber = document.getElementById("accountNumber").value;


    let addAmount = document.getElementById("addAmount").value;
    addAmount = parseInt(addAmount);

    const PINNumber = document.getElementById("PIN-Number").value;
    if (accountNumber.length != 11 || PINNumber !== '1234') {
        alert("Please Enter Valid Account Number & Password");
        return;
    }
    else {
        alert("Successfully Added Money to Your Account");
        balance = balance + addAmount;
        balancePosition.textContent = balance;
        console.log(balance);
    }

});
document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "./index.html";
});