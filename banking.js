//****************bank site js*******************//
document.getElementById('deposite-btn').addEventListener('click', function () {
    // update deposite Amount
    const depositeAmount = document.getElementById('deposite-amount');
    const newdepositetext = depositeAmount.value;
    const newdeposite = parseFloat(newdepositetext);
    const depositeTotal = document.getElementById('deposite-total');
    const prevDepositeAmounttext = depositeTotal.innerText;
    const prevDepositeAmount = parseFloat(prevDepositeAmounttext);
    const newDepositeTotal = prevDepositeAmount + newdeposite;
    depositeTotal.innerText = newDepositeTotal
    // clear deposite input field
    depositeAmount.value = ""
    // Update account balance
    const balancetotal = document.getElementById('balance-total');
    const prevbalancetotaltext = balancetotal.innerText;
    const prevbalancetotal = parseFloat(prevbalancetotaltext);
    const newBalanceTotal = prevbalancetotal + newDepositeTotal;
    balancetotal.innerText = newBalanceTotal


})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // update Withdraw Amount
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newwithdrawtext = withdrawAmount.value;
    const newwithdraw = parseFloat(newwithdrawtext);
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevwithdrawAmounttext = withdrawTotal.innerText;
    const prevwithdrawAmount = parseFloat(prevwithdrawAmounttext);
    const newwithdrawTotal = prevwithdrawAmount + newwithdraw;
    withdrawTotal.innerText = newwithdrawTotal
    // clear withdraw input field
    withdrawAmount.value = ""
    // Update account balance
    const balancetotal = document.getElementById('balance-total');
    const prevbalancetotaltext = balancetotal.innerText;
    const prevbalancetotal = parseFloat(prevbalancetotaltext);
    const newBalanceTotal = prevbalancetotal - newwithdrawTotal;
    balancetotal.innerText = newBalanceTotal


})

