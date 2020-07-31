const btn = document.getElementById("btn");
btn.onclick = () => generatePassword();

function generatePassword() {
  const charsToUse =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){};<>?_+-=";
  const passwordLen = 16;
  let password = "";
  for (let i = 0; i < passwordLen; i++) {
    let randomNum = Math.floor(Math.random() * charsToUse.length);
    password += charsToUse.substring(randomNum, randomNum + 1);
  }
  document.getElementById("password-output").value = password;
}
