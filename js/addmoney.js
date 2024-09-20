document.getElementById('btn-add-money')
.addEventListener('click' , function (even){
    even.preventDefault();
    const addAmount = document.getElementById('input-amount-number').value;
    const addAmountNumber = parseFloat(addAmount);
    const addPin   = document.getElementById('input-pin-number').value;

    if(addPin === '1234'){
        const availableBalance = document.getElementById('available-balance').innerText;
        const availableBalanceNumber = parseFloat(availableBalance);
        const updatedBalance = availableBalanceNumber + addAmountNumber;
        document.getElementById('available-balance').innerText = updatedBalance;
    }
    else{
        alert('Failed to add money, please try again.')
    }
})