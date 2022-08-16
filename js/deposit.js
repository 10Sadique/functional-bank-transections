document.getElementById('btn-deposit').addEventListener('click', () => {
    // value form input field
    const newDepositAmount = getInputValueById('deposit-field')

    // previous deposit value
    const prevDepositAmount = getInnerTextById('deposit-total')

    // get previous balance amount
    const prevBalanceAmount = getInnerTextById('balance-total')

    // calculating deposit & balance
    const currDeposit = prevDepositAmount + newDepositAmount
    const currBalance = prevBalanceAmount + newDepositAmount

    // updating deposit amount
    setInnerTextById('deposit-total', currDeposit)
    

    // updating balance amount
    setInnerTextById('balance-total', currBalance)
})