document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutValue = getInputValueById('input-cash-out-number');
        const addPin = getInputValueById('input-cash-out-pin')
        if(addPin === 1234){
            const balance = getTextFieldById('available-balance');
            const newBalance = balance - cashOutValue;
            document.getElementById('available-balance').innerText = newBalance;
        }
        else{
            alert('No money of you!')
        }
    })