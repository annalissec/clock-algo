import "./app.scss"
import Input from "./components/input/Input"
import Clock from "./components/clock/Clock"
import { useState } from "react";

function App() {

	const [cacheSize, setCacheSize] = useState("")

  return (
    <div className="app">
		<div className="title">Clock Algorithm: {cacheSize}</div>
		<div className="section">
			<Input cacheSize={cacheSize} setCacheSize={setCacheSize}/>
			<Clock/>
		</div>
    </div>
  );
}

export default App;
