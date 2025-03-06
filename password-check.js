const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("submit")
const successes = Array.from(document.getElementsByClassName("success-reveal"))
const failures = Array.from(document.getElementsByClassName("failure-reveal"))
const forms = Array.from(document.getElementsByClassName("form-input"))

submitButton.onclick = () => {
    if (
        (
            emailInput.value === "andrew.do.overbye@gmail.com" ||
            emailInput.value === "andrew.do.overbye@gmail" ||
            emailInput.value === "andrew.do.overbye"
        ) &&
        passwordInput.value === "vinge1000"
    ) {
        successes.forEach(element => {
            element.classList.remove("invisible")
        })
    } else {
        failures.forEach(element => {
            element.classList.remove("invisible")
        })
    }
    forms.forEach(element => {
        element.classList.add("invisible")
    })
}