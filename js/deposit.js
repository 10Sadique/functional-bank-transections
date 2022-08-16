'use strict'

document.getElementById('btn-deposit').addEventListener('click', () => {
    // value form input field
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value 
    const newDepositAmount = parseFloat(newDepositAmountString)

    // previous deposit value
    const deposit = document.getElementById('deposit-total')
    const prevDepositAmountString = deposit.innerText
    const prevDepositAmount = parseFloat(prevDepositAmountString)

    // get previous balance amount
    const balance = document.getElementById('balance-total')
    const prevBalanceAmountString = balance.innerText
    const prevBalanceAmount = parseFloat(prevBalanceAmountString)

    // calculating deposit & balance
    const currDeposit = prevDepositAmount + newDepositAmount
    const currBalance = prevBalanceAmount + newDepositAmount

    // updating deposit amount
    deposit.innerText = currDeposit

    // updating balance amount
    balance.innerText = currBalance
    console.log(prevBalanceAmount, typeof prevBalanceAmount)
    depositField.value = ''
})