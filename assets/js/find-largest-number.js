function onButtonClick() {
  const numbersList = [];

  const listSize = prompt("Enter size of numbers you would like to compare");

  const number1 = prompt("Enter a number");
  numbersList.push(parseInt(number1));
  const number2 = prompt("Enter next number");
  numbersList.push(parseInt(number2));

  let largestNumber = 0;
  if (number1 > number2) {
    largestNumber = number1;
  } else {
    largestNumber = number2;
  }

  for (let counter = 0; counter < listSize - 2; counter++) {
    const newNumber = parseInt(prompt("Enter next number"));
    numbersList.push(newNumber);
    if (newNumber > largestNumber) {
      largestNumber = newNumber;
    }
  }

  alert(
    "List Size : " +
      listSize +
      "\n" +
      "Numbers entered : " +
      numbersList +
      "\n" +
      "The largest number is " +
      largestNumber
  );
}
