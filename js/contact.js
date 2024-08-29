let submitButton = document.getElementById("submit-button");
let form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});