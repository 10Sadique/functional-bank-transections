'use strict'

document.getElementById('btn-withdraw').addEventListener('click', () => {
    // get withdraw value form input field
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value 
    const newWithdrawAmount = Number(newWithdrawAmountString)

    // previous withdraw amount
    const withdraw = document.getElementById('withdraw-total')
    const prevWithdrawAmountString = withdraw.innerText
    const prevWithdrawAmount = Number(prevWithdrawAmountString)

    // get previous balance amount
    const balance = document.getElementById('balance-total')
    const prevBalanceAmountString = balance.innerText
    const prevBalanceAmount = Number(prevBalanceAmountString)

    // calculating current withdraw & balance amount
    const currWithdraw = prevWithdrawAmount + newWithdrawAmount
    const currBalance = prevBalanceAmount - newWithdrawAmount

    // update withdraw amount
    withdraw.innerText = currWithdraw

    // update balance amount 
    balance.innerText = currBalance
    
    // clearnig withdraw input field
    withdrawField.value = ''
})