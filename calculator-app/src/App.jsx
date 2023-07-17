import { useState } from 'react';
import styles from './App.module.css';
import { getButtons } from './get-buttons';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
		errorMsg,
		setErrorMsg,
	};

	const output = operand1 + operator + operand2;

	const buttons = getButtons(state);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.display} ${
					errorMsg ? styles.error : isResult ? styles.result : ''
				}`}
			>
				{!errorMsg ? output : errorMsg}
			</div>
			<div className={styles.buttons}>
				<div className={styles.left}>
					{buttons.map(({ id, label, group, handleClick }) =>
						group === 'numbers' ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handleClick(label)}
							>
								{label}
							</button>
						) : null,
					)}
				</div>
				<div className={styles.right}>
					{buttons.map(({ id, label, group, handleClick }) =>
						group === 'operators' ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handleClick(label)}
							>
								{label}
							</button>
						) : null,
					)}
				</div>
			</div>
		</div>
	);
};
