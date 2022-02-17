// function = take input value 
function getInputValue(inputId, event){
    const input = document.getElementById(inputId);
    const inputValue = input.value ; 
    if (parseFloat(inputValue) >= 0){
        return inputValue
    }
    else{

        console.log(event.target)
    }
}

// function = get total expenses 
function getTotalExpenses(){
    const foodCost = getInputValue("food", event);
    const rentCost = getInputValue("rent", event);
    const clothesCost = getInputValue("clothes", event);
    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    return totalExpenses;
}

// function = show expenses and balances 
function showExpensesAndBalance(){
    const income = parseFloat(getInputValue("income", event));
    console.log(income)
    const expenses = getTotalExpenses();
    console.log(expenses)
    const remaining = income - expenses; 
    if (remaining >= 0 ){
        document.getElementById("expenses").innerText = expenses;
        document.getElementById("balance").innerText = remaining;
        

    }
    else{
        console.log("not valied input")
    }

}
