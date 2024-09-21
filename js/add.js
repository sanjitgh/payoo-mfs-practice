document.getElementById('btn-add-money')
.addEventListener('click' , function(event){
    event.preventDefault(); // stop loading
    const addMoney = getInputValueById('input-amount-number');
    const addPin   = getInputValueById('input-pin-number');
    
    if(addPin === 1234){
        console.log('successful')
    }
    else{
        alert('faild to add money!')
    }
})