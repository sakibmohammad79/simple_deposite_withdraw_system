document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

    const withdrawElement = document.getElementById('withdrawValue');
    const withdrawCurrentValue = withdrawElement.innerText;
    
    // const updateWithdraw = parseFloat(inputValue)+parseFloat(withdrawCurrentValue);
    // withdrawElement.innerText = updateWithdraw;

    inputField.value = '';

    // balance 
    const balance = document.getElementById('current-balance');
    const currentBalance = balance.innerText;
    if(parseFloat(inputValue)>parseFloat(currentBalance)){
        alert('fokir hoye etho taka tular shok ken');
        return;
    }

    const updateWithdraw = parseFloat(inputValue)+parseFloat(withdrawCurrentValue);
    withdrawElement.innerText = updateWithdraw;


    const minusWithdraw =(currentBalance)-parseFloat(inputValue);
    balance.innerText= minusWithdraw;
})