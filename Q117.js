/*
Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of
the cases match.
*/
function evaluateExpression(expression) {
    switch (expression) {
        case "add":
            console.log("Performing addition operation.");
            break;
        case "subtract":
            console.log("Performing subtraction operation.");
            break;
        case "multiply":
            console.log("Performing multiplication operation.");
            break;
        case "divide":
            console.log("Performing division operation.");
            break;
        default:
            console.log("Invalid expression. Please provide a valid expression.");
            break;
    }
}
// Example usage:
evaluateExpression("add"); // Output: Performing addition operation.
evaluateExpression("multiply"); // Output: Performing multiplication operation.
evaluateExpression("power"); // Output: Invalid expression. Please provide a valid expression.
