import {
	clickNumber,
	clickReset,
	clickPlus,
	clickMinus,
	clickResult,
	clickMultiply,
	clickDivide,
} from './handlers';

export const getButtons = (state) => [
	{
		id: '1',
		label: '1',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '2',
		label: '2',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '3',
		label: '3',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '4',
		label: '4',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '5',
		label: '5',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '6',
		label: '6',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '7',
		label: '7',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '8',
		label: '8',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '9',
		label: '9',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: '0',
		label: '0',
		group: 'numbers',
		handleClick: (label) => clickNumber(state, label),
	},
	{
		id: 'C',
		label: 'C',
		group: 'operators',
		handleClick: (label) => clickReset(state, label),
	},
	{
		id: '+',
		label: '+',
		group: 'operators',
		handleClick: (label) => clickPlus(state, label),
	},
	{
		id: '-',
		label: '-',
		group: 'operators',
		handleClick: (label) => clickMinus(state, label),
	},
	{
		id: '*',
		label: '*',
		group: 'operators',
		handleClick: (label) => clickMultiply(state, label),
	},
	{
		id: '/',
		label: '/',
		group: 'operators',
		handleClick: (label) => clickDivide(state, label),
	},
	{
		id: '=',
		label: '=',
		group: 'operators',
		handleClick: (label) => clickResult(state, label),
	},
];
