var valueField = document.getElementById("exprfield")
var operators = ["+", "-", "*", "/"]

function addElementToExpression(expr){
    valueField.value += expr
}

function clr() {
    valueField.value = ""
}

function remLast() {
    let expression = valueField.value
    valueField.value = expression.substr(0, expression.length - 1)
}

function calculate(){
    valueField.value = eval(valueField.value)
}