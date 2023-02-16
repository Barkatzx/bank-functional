document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementById('total-withdraw');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('total-withdraw', newWithdrawTotal);
    const previousBalanceTotal = getElementById('total-balance');
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-balance', currentBalanceTotal);
})