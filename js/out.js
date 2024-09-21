document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutValue = getInputValueById('input-cash-out-number');
        const addPin = getInputValueById('input-cash-out-pin');
        if(isNaN(cashOutValue)){
            alert('Faild to cash out');
            return;
        }
        if(addPin === 1234){
            const balance = getTextFieldById('available-balance');
            if(cashOutValue > balance){
                alert("You dont't have enough balance.");
                return;
            }
            const newBalance = balance - cashOutValue;
            document.getElementById('available-balance').innerText = newBalance;

            // transaction add
            const div = document.createElement('div');
            div.classList.add('bg-blue-100');
            div.innerHTML = `
            <h4 class="text-xl">Cash Out </h4>
            <p>${cashOutValue} withdraw. New balance ${newBalance}</p>
            `;
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert('No money of you!')
        }
    })