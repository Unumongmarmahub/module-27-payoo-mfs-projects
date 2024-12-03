// search: form submit reloading the page
// step 1
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step 2
    event.preventDefault();
    // step 3
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // step 4
    if (phoneNumber === "5" && pinNumber === "123") {
      window.location.href = "/home.html";
    } else {
      alert("Your Pin and Mobile Number Will Be Wrong");
    }
  });
