function onButtonClick() {
  const numbersList = [];
  for (let counter = 0; counter < 10; counter++) {
    const userResponse = prompt("Enter a number");
    numbersList.push(parseInt(userResponse));
  }
  let sum = 0;
  sum = sum + numbersList[1];
  let counter = 1;
  for (index = 0; index < 9; index++) {
    sum = sum + numbersList[counter];
    counter = counter + 1;
  }
  alert("Numbers entered : " + numbersList + "\n" + "The sum is " + sum);
}
