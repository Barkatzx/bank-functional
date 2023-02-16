 function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
 }

 function getElementById(elementId){
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const value = parseFloat(elementValueString);
    return value;
 }

 function setTextElementValueById(elementId, newValue){
 const textElement = document.getElementById(elementId);
 textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getElementById('total-balance');
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', currentBalanceTotal);
})