/*CARDHOLDER NAME*/
let fullName = document.querySelector("#name");

fullName.addEventListener("input", () => {
  if (fullName.value == "")
    document.querySelector(".name").innerHTML = "Jane Appleseed";
  else document.querySelector(".name").innerHTML = fullName.value;
});

/*CVV*/
let cvv = document.querySelector("#cvv");

cvv.addEventListener("input", () => {
  if (isNaN(cvv.value) || cvv.value[cvv.value.length - 1] == " ")
    cvv.value = cvv.value.slice(0, -1);

  if (cvv.value == "") document.querySelector(".cvv").innerHTML = "000";
  else document.querySelector(".cvv").innerHTML = cvv.value;
});

/*MONTH*/
let month = document.querySelector("#month");

month.addEventListener("input", () => {
  //allow number input only
  if (isNaN(month.value) || month.value[month.value.length - 1] == " ")
    month.value = month.value.slice(0, -1);

  //display info on card
  if (month.value == "") document.querySelector(".month").innerHTML = "00";
  else if (parseInt(month.value) < 10 && month.value.length != 2)
    document.querySelector(".month").innerHTML = "0" + month.value;
  else document.querySelector(".month").innerHTML = month.value;
});

/*YEAR*/
let year = document.querySelector("#year");

year.addEventListener("input", () => {
  //allow number input only
  if (isNaN(year.value) || year.value[year.value.length - 1] == " ")
    year.value = year.value.slice(0, -1);

  //display info on card
  if (year.value == "") document.querySelector(".year").innerHTML = "00";
  else document.querySelector(".year").innerHTML = year.value;
});

/*CARD NUMBER*/
let holderNumber = document.querySelector("#card-number");
let prevValue = holderNumber.value;

holderNumber.addEventListener("input", () => {
  //Accept numbers only
  if (
    isNaN(holderNumber.value.replace(/\s/g, "")) ||
    holderNumber.value == " "
  ) {
    holderNumber.value = prevValue;
  } else {
    let count = 0;
    let newVal = holderNumber.value.replace(/\s/g, "");
    let temp = "";
    for (let i = 0; i < newVal.length; i++) {
      if (count > 0 && count % 4 == 0) temp += " ";
      temp += newVal[i];
      count++;
    }

    holderNumber.value = temp;
    prevValue = holderNumber.value;
  }

  //display info on card
  document.querySelector(".number").innerHTML = cardNumber(holderNumber.value);
});

function cardNumber(num) {
  num = num.replace(/\s/g, "");
  newValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //change array values to string values
  for (let i = 0; i < num.length; i++) {
    newValue[i] = num[i];
  }

  //if user erase last value, change value on card to 0
  if (newValue[num.length]) newValue[num.length] = 0;

  //Convert array values to string and return
  let cardValue = "";
  let length = 0;
  for (let i = 0; i < newValue.length; i++) {
    //insert space after every four digits
    if (length % 4 == 0) cardValue += " ";
    cardValue += newValue[i];
    length++;
  }
  return cardValue;
}

/*SUBMIT FORM*/
document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();
  document.querySelector("form").classList.toggle("show");
  document.querySelector(".thank-you").classList.toggle("show");
});
