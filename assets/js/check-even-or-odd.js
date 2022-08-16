function onButtonClick() {
  const numbersList = [];
  for (let counter = 0; counter < 10; counter++) {
    const userResponse = prompt("Enter a number");
    let evenOdd = parseInt(userResponse) % 2;
    if (evenOdd == 0) {
      numbersList.push(userResponse + " - even");
    } else {
      numbersList.push(userResponse + " - odd");
    }
  }
  alert(numbersList);
}
