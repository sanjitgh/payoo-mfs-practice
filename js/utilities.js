function getInputValueById(id) {
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney)
    return addMoneyNumber;

}