function onButtonClick() {
  const numbersList = [];

  const listSize = prompt("Enter size of numbers you would like to compare");

  let largestNumber = 0;

  for (let counter = 0; counter < listSize; counter++) {
    const newNumber = parseInt(prompt("Enter the number"));
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
