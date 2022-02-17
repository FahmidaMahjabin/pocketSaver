// function = take input value 
function getInputValue(inputId, event){
    const input = document.getElementById(inputId);
    const inputValue = input.value ; 
    if (parseFloat(inputValue) >= 0){
        return inputValue
    }
    else{
        console.log(inputId);
        showAlert(inputId);
        
    }
}
// function = showAlert
function showAlert(item){
    document.getElementById("alert-message").innerText = `${item} is not valid. Please enter valid number. `
    document.getElementById("alertSection").style.display = "block";
    document.getElementById("expensesSection").style.display = "none";
}

// function = get total expenses 
function getTotalExpenses(){
    const foodCost = getInputValue("food", event);
    console.log(foodCost)
    const rentCost = getInputValue("rent", event);
    console.log(rentCost)
    const clothesCost = getInputValue("clothes", event);
    console.log(clothesCost)
    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    console.log("total expenses:", totalExpenses)
    return totalExpenses;
}

// function = show expenses and balances 
function showExpensesAndBalance(event){
    const income = parseFloat(getInputValue("income", event));
    console.log(income)
    const expenses = getTotalExpenses();
    if(expenses != NaN){
        console.log(expenses)
        const remaining = income - expenses; 
        if (remaining >= 0 ){
            
            document.getElementById("expenses").innerText = expenses;
            document.getElementById("balance").innerText = remaining;
            document.getElementById("expensesSection").style.display = "block";
            document.getElementById("alertSection").style.display = "none";
        }
        else{
            showAlert("expenses")
        }

    }
    

}
