const btn = document.querySelector("#calc"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

//   alternative
  const hideError = () =>{
    setTimeout(() => {
        error.style.display = "none "
    }, 3000);
  };

const calcTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    

    if (bill === "" || rate == "") {
        // console.log("please add a number")
        error.style.display = "block";
        hideError();
        // setTimeout(() => {
        //     error.style.display = "none "
        // }, 3000);
    } else if (isNaN(bill)){
        error.innerHTML = "Please Enter a number"
        error.style.display = "block";
        hideError();
    } else {
        let tipAmt = Math.round(bill * rate);
        // Math.ceil()
        //  highestc integer
        tip.innerHTML = `Tip Amount: $${tipAmt}`

        let totalBill = Number(bill) + tipAmt;
        total.innerHTML = `Total Amount: $${totalBill}`
    }
    // e.preventDefault();
}

btn.addEventListener("click", calcTip);