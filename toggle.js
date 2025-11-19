//HTML collections
const formElement = document.getElementsByClassName("forms");
const formBtn = document.getElementsByClassName("form-btn");
console.log(formBtn);

//function for toggling
function toggleFeature(id) {
    for (const form of formElement) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// toogle effect code function
function toggleEffect(id) {
    for (const btn of formBtn) {
        btn.style.backgroundColor = "white";
        btn.style.border = "1px solid #0808081a";
    }
    document.getElementById(id).style.backgroundColor = "#f4f5f7";
    document.getElementById(id).style.border = "2px solid green";

}
//add money section
document.getElementById("add-button").addEventListener("click", function () {
    toggleFeature("add-money-section");
    toggleEffect("add-button");

});
//cashout section
document.getElementById("cash-out-button").addEventListener("click", function () {
    toggleFeature("cash-out-section");
    toggleEffect("cash-out-button");
});
//transfer section
document.getElementById("transfer-button").addEventListener("click", function () {
    toggleFeature("transfer-section");
    toggleEffect("transfer-button");
});
//Get Bonus section
document.getElementById("get-bonus-button").addEventListener("click", function () {
    toggleFeature("get-bonus-section");
    toggleEffect("get-bonus-button");
});
//Pay Bill section
document.getElementById("paybill-button").addEventListener("click", function () {
    toggleFeature("pay-bill-section");
    toggleEffect("paybill-button");
});
//Transaction section
document.getElementById("transaction-button").addEventListener("click", function () {
    toggleFeature("transaction-section");
    toggleEffect("transaction-button");
});