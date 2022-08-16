function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountString = inputField.value 
    const inputAmount = Number(inputAmountString)
    inputField.value = ''

    return inputAmount
}

function getInnerTextById(totalId) {
    const total = document.getElementById(totalId)
    const totalAmountString = total.innerText
    const totalAmount = Number(totalAmountString)

    return totalAmount
}

function setInnerTextById(totalId, newValue) {
    const textElement = document.getElementById(totalId)
    textElement.innerText = newValue
}