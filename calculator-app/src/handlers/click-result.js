export const clickResult = ({
	operator,
	operand1,
	operand2,
	setOperand1,
	setOperator,
	setOperand2,
	setIsResult,
	setErrorMsg,
}) => {
	let result;

	switch (operator) {
		case '+': {
			result = Number(operand1) + Number(operand2);
			break;
		}
		case '-': {
			result = Number(operand1) - Number(operand2);
			break;
		}
		case '*': {
			result = Number(operand1) * Number(operand2);
			break;
		}
		case '/': {
			result = Number(operand1) / Number(operand2);

			if (result === Infinity || result === -Infinity || isNaN(result)) {
				setErrorMsg('Error of division by 0');
				setOperand1('0');
			}

			break;
		}

		default:
		// Ничего не делаем
	}

	setOperand1(result);
	setOperator('');
	setOperand2('');
	setIsResult(true);
};
