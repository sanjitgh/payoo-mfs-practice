document.getElementById('btn-cash-out')
.addEventListener('click', function(even){
    even.preventDefault();
    const addCashOutAmount = document.getElementById('input-cash-out-number').value;
    const addCashOutAmountNumber = parseFloat(addCashOutAmount);
    const addPin = document.getElementById('input-cash-out-pin').value;
    if(addPin === '1234'){
        const availableBalance = document.getElementById('available-balance').innerText;
        const availableBalanceNum = parseFloat(availableBalance);
        const updatedBalance = availableBalanceNum - addCashOutAmountNumber;
        document.getElementById('available-balance').innerText = updatedBalance;
    }
    else{
        alert('Faild to cash out. please try again.')
    }
})