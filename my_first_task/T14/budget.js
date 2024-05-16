class Income {
  constructor(name, amount, isRecurring) {
    this.name = name;
    this.amount = amount;
    this.isRecurring = isRecurring;
  }
}

class Expense {
  constructor(name, amount, isRecurring) {
    this.name = name;
    this.amount = amount;
    this.isRecurring = isRecurring;
  }
}

sessionStorage.setItem("incomeList", JSON.stringify([]));
sessionStorage.setItem("expenseList", JSON.stringify([]));

function newIncome() {
  let incomeSofar = getExistingObjects(
    JSON.parse(sessionStorage.getItem("incomeList"))
  );
  let incomeName = prompt(incomeSofar + "Please enter income name:");
  //If income is null it will simply return
  if (incomeName == null || incomeName == "") {
    return;
  }
  let amount = prompt("Please enter income amount:");
  if (amount == null || amount == "") {
    return;
  }
  incomeList = JSON.parse(sessionStorage.getItem("incomeList"));
  incomeList.push(new Income(incomeName, amount, true)); //using push command to add new entry
  sessionStorage.setItem("incomeList", JSON.stringify(incomeList));
  displayAlertDisposableIncome();
}

function newExpense() {
  let expenseSofar = getExistingObjects(
    JSON.parse(sessionStorage.getItem("expenseList"))
  );
  let expenseName = prompt(expenseSofar + "Please enter expense name:");
  if (expenseName == null || expenseName == "") {
    return;
  }
  //Using prompt function to get name & amount from the input
  let amount = prompt("Please enter expense amount:");
  if (amount == null || amount == "") {
    return;
  }
  expenseList = JSON.parse(sessionStorage.getItem("expenseList"));
  expenseList.push(new Expense(expenseName, amount, true));
  sessionStorage.setItem("expenseList", JSON.stringify(expenseList));
  displayAlertDisposableIncome();
}

function getTotalValue(list) {
  return list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
}

function displayAlertDisposableIncome() {
  let incomeList = JSON.parse(sessionStorage.getItem("incomeList"));
  let expenseList = JSON.parse(sessionStorage.getItem("expenseList"));
  let disposableIncome = getTotalValue(incomeList) - getTotalValue(expenseList);
  alert("Disposable Income " + disposableIncome);
}

function getExistingObjects(list) {
  let text = "";
  for (let i = 0; i < list.length; i++) {
    text += list[i].name + "," + list[i].amount + "\n";
  }
  return text;
}
