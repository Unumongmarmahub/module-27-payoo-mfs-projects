document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOutAmount);
    const cashOutPinNumber = document.getElementById(
      "input-cash-out-password"
    ).value;
    if (cashOutPinNumber === "1234") {
      const getAmount = document.getElementById("amount-balance").innerText;
      const getAmountNumber = parseFloat(getAmount);
      const reduceAmount = getAmountNumber - cashOutNumber;
      document.getElementById("amount-balance").innerText = reduceAmount;
    } else {
      alert("Your Are Wrong...! Please try again.");
    }
  });
