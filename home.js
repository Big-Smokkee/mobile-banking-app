//variable for showing transaction
const transactionData = [];
// function to get input values and convert into number
function getInputValueNumber(id) {
    const value = parseInt(document.getElementById(id).value);
    return value;
}
// function to get input values 
function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}
// function to get inner text converted into number
function getInnerTextIntoNumber(id) {
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}

//function to set innter text
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("availableBalance");
    availableBalanceElement.innerText = value;
    console.log(value);
}


// Add money section

document.getElementById("addMoneyBtn").addEventListener('click', function (event) {
    event.preventDefault();
    let balance = getInnerTextIntoNumber("availableBalance");
    const bankName = getInputValue("bankName");

    const accountNumber = getInputValue("accountNumber");


    const addAmount = getInputValueNumber("addAmount");

    const PINNumber = getInputValue("PIN-Number")
    if (accountNumber.length != 11 || PINNumber !== '1234') {
        alert("Please Enter Valid Account Number & Password");
        return;
    }
    else {
        alert("Successfully Added Money to Your Account");
        balance = balance + addAmount;
        setInnerText(balance);

        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString(),
        };
        transactionData.push(data);
        console.log(transactionData);
    }

});
//logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "./index.html";
});

// cashout section
document.getElementById("withdraw-money-btn").addEventListener('click', function (event) {
    event.preventDefault();

    let balance = getInnerTextIntoNumber("availableBalance");


    const agentName = getInputValue("agent-number");
    const PINNumber = getInputValue("withdraw-PIN-Number");



    let withdrawAmount = getInputValueNumber("withdraw-amount");


    if (agentName.length != 11 || PINNumber !== '1234') {
        alert("Please Enter Valid Account Number & Password");
        return;
    }
    else {
        balance = balance - withdrawAmount;
        if (balance < 1) {
            alert("Your balance credit is low");
            balance = balance + withdrawAmount;
            return;
        }
        setInnerText(balance);
        console.log(balance);
        alert("Cashout Successfull");
        const data = {
            name: "Cashout",
            date: new Date().toLocaleTimeString(),
        };
        transactionData.push(data);
        console.log(transactionData);
    }
});

//transaction section

document.getElementById("transaction-button").addEventListener("click", function () {
    // const transactionHeading = document.getElementById("transaction-heading");
    // const transactionTime = document.getElementById("transaction-time");

    // for (const data of transactionData) {
    //     // console.log(data.name);
    //     transactionHeading.innerText = data.name;
    //     transactionTime.innerText = data.date;
    // }

    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = "";
    for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex items-center justify-between px-4 py-3 mb-3 bg-white rounded-xl">
                    <div class="flex items-center gap-4">
                        <img src="./assets/wallet1.png" alt="bill" class="">
                        <div>
                            <h4 id="transaction-heading">${data.name}</h4>
                            <p id="transaction-time">${data.date}</p>
                        </div>

                    </div>
                    <span class="rotate-90"><i class="fa-solid fa-ellipsis"></i></span>
                </div>`;
        transactionContainer.appendChild(div);
    }

})


