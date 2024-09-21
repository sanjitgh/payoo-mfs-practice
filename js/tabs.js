// document.getElementById('btn-addMoney')
// .addEventListener('click', function(){
//     document.getElementById('addmoney-form').classList.remove('hidden');
//     document.getElementById('cashout-form').classList.add('hidden');
//     document.getElementById('btn-cashOut').classList.remove('bg-blue-100');
//     document.getElementById('btn-addMoney').classList.add('bg-blue-100');
// })



// document.getElementById('btn-cashOut')
// .addEventListener('click', function(){
//     document.getElementById('cashout-form').classList.remove('hidden');
//     document.getElementById('addmoney-form').classList.add('hidden');
//     document.getElementById('btn-addMoney').classList.remove('bg-blue-100');
//     document.getElementById('btn-cashOut').classList.add('bg-green-100');
// })


document.getElementById('btn-addMoney')
.addEventListener('click' , function (){
    showSectinById('addMoney-form')
})

document.getElementById('btn-cashOut')
.addEventListener('click', function(){
    showSectinById('cashout-form')
})

document.getElementById('btn-transaction')
.addEventListener('click', function(){
    showSectinById('transaction-form')
})