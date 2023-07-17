export const clickReset = ({
	setOperand1,
	setOperator,
	setOperand2,
	setIsResult,
	setErrorMsg,
}) => {
	setOperand1('0');
	setOperator('');
	setOperand2('');
	setIsResult(false);
	setErrorMsg('');
};
