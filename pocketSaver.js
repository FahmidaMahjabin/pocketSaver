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

// function = get the saving amount 
// step1:saving id er element e jei input dibo tar parcent diye income k multiply korbo 
// case1: input > 0 hote hobe 
// case2:saving can't be greater than (income - expenses)
function getSavings(){
    const savingPercentageStr = document.getElementById("saving").value;
    const savingPercentageFloat = parseFloat(savingPercentageStr);
    if (savingPercentageFloat > 0){
        const income = getInputValue("income");
        if (income > 0){
            console.log(income);
            const saving = income * savingPercentageFloat / 100;
            return saving;
        }
        
    }
}

// function = get remaining 
// remaining = income - (expenses + saving) 
// case1: remaining cant be negative 
function getRemaining(){
    const income = getInputValue("income");
    const expenses = getTotalExpenses();
    const saving = getSavings();
    const remaining = income - (expenses + saving);
    if (remaining >= 0){
        return remaining;
    }
}
// add saving and remaining to html 
function showSavingandRemainingToHTML(){
    const saving = getSavings();
    const remaining = getRemaining();
    if (saving >= 0 && remaining >= 0){
        document.getElementById("savings").innerText = saving;
        document.getElementById("remaining").innerText = remaining;
        document.getElementById("alert").style.display = "none";
    }
    else{
        const alert = document.getElementById("alert")
        alert.innerText = "saving can't be more then expenses";
        alert.style.display = "block";
        document.getElementById("savingSection").style.display = "none";

    }
}


