const btn = document.querySelector("#calc");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

const calculateTip = ()=>{
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate === ""){
        error.style.display = "block"
    } else if (isNaN(bill)){
        error.innerHTML = "Please Enter a number";
        error.style.display = "block";
    } else{
        let tipAmt = bill * rate
        tip.innerHTML = "Tip Amount: " + "$" + tipAmt

        let totalBill = Number(bill) + tipAmt
        total.innerHTML = "Total Amount: " + "$" + totalBill
    }

}

btn.addEventListener("click", calculateTip)

// && - and
// || - or
// isNaN - is not a number

