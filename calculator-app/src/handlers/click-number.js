export const clickNumber = (
	{ operator, operand1, setOperand1, setOperand2, setIsResult },
	label,
) => {
	if (operator === '') {
		if (operand1 === '0') {
			setOperand1(label);
		} else {
			setOperand1((prev) => prev + label);
		}
	} else {
		if (operand1 === '0') {
			setOperand2(label);
		} else {
			setOperand2((prev) => prev + label);
		}
	}
	setIsResult(false);
};
