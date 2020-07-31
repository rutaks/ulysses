const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");
const alertPane = document.querySelector(".alert-pane");
const passwordOutput = document.getElementById("password-output");

//================
// EVENT LISTENERS
//================

btn.onclick = () => generatePassword();
copyBtn.onclick = () => copyToClipboard();
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    alertPane.classList.remove("active");
  }
});

//================
// FUNCTIONS
//================

/**
 * Function to randomly generate a password.
 * Attaches the password to output text
 */
const generatePassword = () => {
  const charsToUse =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){};<>?_+-=";
  const passwordLen = 16;
  let password = "";
  for (let i = 0; i < passwordLen; i++) {
    let randomNum = Math.floor(Math.random() * charsToUse.length);
    password += charsToUse.substring(randomNum, randomNum + 1);
  }
  passwordOutput.value = password;
};

/**
 * Function to copy value in password output box to clipboard.
 * Gives you a prompt showing that the password was copied.
 * Does not copy when no password is generated
 */
const copyToClipboard = () => {
  if (passwordOutput.value.length > 0) {
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alertPane.classList.toggle("active");
    alertPane.innerHTML = `Password generated <br/> ${passwordOutput.value} <br/>Press esc to remove prompt`;
  }
};
