
const formElement = document.getElementsByClassName("forms");
//function for toggling
function toggleFeature(id) {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
//add money section
document.getElementById("add-button").addEventListener("click", function () {
    toggleFeature("add-money-section");

});
//cashout section
document.getElementById("cash-out-button").addEventListener("click", function () {
    toggleFeature("cash-out-section");
});
//transfer section
document.getElementById("transfer-button").addEventListener("click", function () {

    toggleFeature("transfer-section");
});
//Get Bonus section
document.getElementById("get-bonus-button").addEventListener("click", function () {
    toggleFeature("get-bonus-section");
});
//Pay Bill section
document.getElementById("paybill-button").addEventListener("click", function () {
    toggleFeature("pay-bill-section");
});
//Transaction section
document.getElementById("transaction-button").addEventListener("click", function () {
    toggleFeature("transaction-section");
});