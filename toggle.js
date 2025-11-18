
const formElement = document.getElementsByClassName("forms");
//add money section
document.getElementById("add-button").addEventListener("click", function () {
    // document.getElementById("cash-out-section").style.display = "none";
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("add-money-section").style.display = "block";

});
//cashout section
document.getElementById("cash-out-button").addEventListener("click", function () {
    // document.getElementById("cash-out-section").style.display = "none";
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("cash-out-section").style.display = "block";

});
//transfer section
document.getElementById("transfer-button").addEventListener("click", function () {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("transfer-section").style.display = "block";
});
//Get Bonus section
document.getElementById("get-bonus-button").addEventListener("click", function () {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("get-bonus-section").style.display = "block";
});
//Pay Bill section
document.getElementById("paybill-button").addEventListener("click", function () {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("pay-bill-section").style.display = "block";
});
//Transaction section
document.getElementById("transaction-button").addEventListener("click", function () {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById("transaction-section").style.display = "block";
});