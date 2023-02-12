document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositefield = document.getElementById('deposite-fields');
    const newDepositeAmount = depositefield.value;
    
    const DipositetotalElement = document.getElementById('current-deposite');
    const previousDipositetotal = DipositetotalElement.innerText;
    
    const currentDepositeTotal = parseInt(newDepositeAmount) + parseInt(previousDipositetotal);

    DipositetotalElement.innerText=currentDepositeTotal;
    depositefield.value='';

    // balance
    const balanceElement = document.getElementById('current-balance');
    const previousBalance = balanceElement.innerText;

    const updateBalance = parseFloat(previousBalance) + parseFloat(newDepositeAmount);

    balanceElement.innerText = updateBalance;

    


})