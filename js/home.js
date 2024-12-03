document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const getAddMoneyValue = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(getAddMoneyValue);
    const getPinNumberValue = document.getElementById("input-password").value;

    if (getPinNumberValue === "1234") {
      const amountBalance = document.getElementById("amount-balance").innerText;

      const balance = parseFloat(amountBalance);
      const newBalance = balance + addMoneyNumber;
      document.getElementById("amount-balance").innerText = newBalance;
    } else {
      alert("Your Are Wrong...! Please try again.");
    }
  });
