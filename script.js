const BillInput = document.getElementById("bill");
const PeopleInput = document.getElementById("numOfPeople");
const Btn5 = document.getElementById("5%Button");
const Btn10 = document.getElementById("10%Button");
const Btn15 = document.getElementById("15%Button");
const Btn20 = document.getElementById("20%Button");
const Btn50 = document.getElementById("50%Button");
const CustomInput = document.getElementById("custom");
const ErrorText = document.getElementById("errorText");
const TipsAmount = document.getElementById("tipsAmount");
const TotalAmount = document.getElementById("total");
const ResetBtn = document.getElementById("reset");

let Tips = 0;
let Total = 0;

function cleanInput(str) {
  const regex = /[e+-]/gi;
  return Number(str.replace(regex, ""));
}

function Error() {
  ErrorText.classList.remove("hidden");
  PeopleInput.classList.remove(
    "border-gray-100",
    "caret-StrongCyan",
    "focus:border-StrongCyan"
  );

  PeopleInput.classList.add(
    "border-red-500",
    "focus:border-red-500",
    "caret-red-500"
  );
}

function Success() {
  ErrorText.classList.add("hidden");
  PeopleInput.classList.remove(
    "border-red-500",
    "caret-red-500",
    "focus:border-red-500"
  );
  PeopleInput.classList.add(
    "border-gray-100",
    "caret-StrongCyan",
    "focus:border-StrongCyan"
  );
}

function Calculate(tipPercentage) {
  // Clean and convert input values to numbers
  const billAmount = cleanInput(BillInput.value);
  const numOfPeople = cleanInput(PeopleInput.value);
  console.log(billAmount, numOfPeople);
  console.log(typeof BillInput.value, typeof PeopleInput.value);

  // Check if the input values are valid numbers
  if (isNaN(billAmount) || isNaN(numOfPeople) || numOfPeople === 0) {
    if (numOfPeople === 0) {
      Error();
    }
    return;
  }

  // Calculate tips and total
  Tips = (billAmount * tipPercentage) / numOfPeople;
  TipsAmount.innerText = "$" + Tips.toFixed(2);

  console.log(Tips);

  Total = Tips + billAmount / numOfPeople;
  TotalAmount.innerText = "$" + Total.toFixed(2);
  Success();
}

Btn5.addEventListener("click", () => {
  Calculate(0.05);
});

Btn10.addEventListener("click", () => {
  Calculate(0.1);
});

Btn15.addEventListener("click", () => {
  Calculate(0.15);
});

Btn20.addEventListener("click", () => {
  Calculate(0.2);
});

Btn50.addEventListener("click", () => {
  Calculate(0.5);
});

CustomInput.addEventListener("input", () => {
  Calculate(cleanInput(CustomInput.value) / 100);
});

ResetBtn.addEventListener("click", () => {
  BillInput.value = "";
  PeopleInput.value = "";
  CustomInput.value = "";
  TipsAmount.innerText = "$0.00";
  TotalAmount.innerText = "$0.00";
  Success();
});
