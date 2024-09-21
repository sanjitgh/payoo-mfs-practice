function getInputValueById (id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}


function getTextFieldById (id){
    const balance = document.getElementById('available-balance').innerText;
    const balanceNum = parseFloat(balance);
    return balanceNum
}


function showSectinById (id){
    // hide all the section
    document.getElementById('addMoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');

    // show section
    document.getElementById(id).classList.remove('hidden');
}