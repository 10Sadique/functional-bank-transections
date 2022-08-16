
document.getElementById('btn-withdraw').addEventListener('click', () => {
    // get withdraw value form input field
    const newWithdrawAmount = getInputValueById('withdraw-field')

    // previous withdraw amount
    const prevWithdrawAmount = getInnerTextById('withdraw-total')

    // get previous balance amount
    const prevBalanceAmount = getInnerTextById('balance-total')

    // calculating current withdraw & balance amount
    const currWithdraw = prevWithdrawAmount + newWithdrawAmount
    const currBalance = prevBalanceAmount - newWithdrawAmount

    // update withdraw amount
    setInnerTextById('withdraw-total', currWithdraw)

    // update balance amount 
    setInnerTextById('balance-total', currBalance)
})