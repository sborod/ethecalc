const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/f60e56788959405d91a19feca21ab8f8"));

const jsonInterface = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "x",
				"type": "int256"
			},
			{
				"name": "y",
				"type": "int256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "x",
				"type": "int256"
			},
			{
				"name": "y",
				"type": "int256"
			}
		],
		"name": "divide",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "x",
				"type": "int256"
			},
			{
				"name": "y",
				"type": "int256"
			}
		],
		"name": "multiply",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "x",
				"type": "int256"
			},
			{
				"name": "y",
				"type": "int256"
			}
		],
		"name": "subtract",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]

const contractAddress = '0x6eab7a2d1f06dceca1bfe23788f4d0152f356f45'

module.exports = new web3.eth.Contract(jsonInterface, contractAddress);