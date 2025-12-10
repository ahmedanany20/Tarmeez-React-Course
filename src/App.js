import "./App.css";

import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract, multiply, divide } from './features/calcs/calcSlice'


function App() {
	const [firstNumberInput, setFirstNumberInput] = useState(0);
	const [secondNumberInput, setSecondNumberInput] = useState(0);
  const resultState = useSelector((state) => state.calc.result)
  const dispatch = useDispatch()
  
 

	// EVENT HANDLERS
	function handleSumClick() {
		// const result = Number(firstNumberInput) + Number(secondNumberInput);
		// setResult(result);
    dispatch(sum({firstNumber: Number(firstNumberInput), secondNumber: Number(secondNumberInput)}))
	}

	function handleSubClick() {
		dispatch(subtract({firstNumber: Number(firstNumberInput), secondNumber: Number(secondNumberInput)}))
	}

	function handleMultClick() {
		dispatch(multiply({firstNumber: Number(firstNumberInput), secondNumber: Number(secondNumberInput)}))
	}

	function handleDivClick() {
		dispatch(divide({firstNumber: Number(firstNumberInput), secondNumber: Number(secondNumberInput)}))
	}

	return (
		<div className="App">
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					background: "teal",
				}}
			>
				{/* FIRST INPUT */}
				<label>First Number</label>
				<input
					value={firstNumberInput}
					onChange={(e) => setFirstNumberInput(e.target.value)}
				/>

				{/* SECOND INPUT */}
				<label>Second Number</label>
				<input
					value={secondNumberInput}
					onChange={(e) => setSecondNumberInput(e.target.value)}
				/>

				<button onClick={handleSumClick}>sum</button>

				<button onClick={handleSubClick}>subtract</button>

				<button onClick={handleMultClick}>multiply</button>

				<button onClick={handleDivClick}>divide</button>

				<hr />

				<h2>{resultState}</h2>
			</div>
		</div>
	);
}

export default App;
