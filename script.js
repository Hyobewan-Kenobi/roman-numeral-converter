const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const outputContainer = document.getElementById("output-container");

const checkUserInput=()=>{
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || inputInt == 0){
    result.innerText = "Please enter a valid number"
    const errorText = "Please enter a valid number"
    outputContainer.innerHTML = `
        <p
        style="
            margin-top: 40px;
            text-align: center;
            color: red;
            "
        >${errorText}</p>
    `
  } else if (inputInt <= -1){
    result.innerText = "Please enter a number greater than or equal to 1"
    const errorText = "Please enter a number greater than or equal to 1"
    outputContainer.innerHTML = `
        <p
        style="
            margin-top: 40px;
            text-align: center;
            color: red;
            "
        >${errorText}</p>
    `
  } else if (inputInt >= 4000){
    result.innerText = "Please enter a number less than or equal to 3999"
    const errorText = "Please enter a number less than or equal to 3999"
    outputContainer.innerHTML = `
        <p
        style="
            margin-top: 40px;
            text-align: center;
            color: red;
            "
        >${errorText}</p>
    `
  } else {
    const convertedText = intToRoman(inputInt).toString()
    outputContainer.innerHTML = `
        <p
        style="
            margin-top: 40px;
            text-align: center;
            font-size: 2rem;
            font-family: serif;
            "
        >${convertedText}</p>
    `
    // result.innerText = intToRoman(inputInt).toString()
  }
  return
}

const intToRoman=(num)=>{
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let roman = "";
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            roman += syms[i];
        }
    }
    return roman;
}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});