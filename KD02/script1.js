function calculate() {
    let operand1 = parseFloat(document.getElementById("operand1").value);
    let operand2 = parseFloat(document.getElementById("operand2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("result").innerText = "ievadiet skaitļus!";
        return;
    }

    if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "-") {
        result = operand1 - operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    } else if (operator === "/") {
        if (operand2 === 0) {
            document.getElementById("result").innerText = "Dalīšana ar nulli nav iespējama!";
            return;
        }
        result = operand1 / operand2;
    } else {
        document.getElementById("result").innerText = "Nepareizs operators!";
        return;
    }

    document.getElementById("result").innerText = "Rezultāts: " + result;
}