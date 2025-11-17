document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "block";
});
document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
});
