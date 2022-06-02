import "./app.scss"
import Input from "./components/input/Input"
import { useState } from "react";
import Clock from "./components/clock/Clock";

function App() {

	const [cacheSize, setCacheSize] = useState("")
	const [pageNum, setPageNum] = useState("")
	const [cache, setCache] = useState('')

  return (
    <div className="app">
		<div className="title">Clock Algorithm: {cacheSize} {pageNum}</div>
		<div className="section">
			<Input cacheSize={cacheSize} setCacheSize={setCacheSize} pageNum={pageNum} setPageNum={setPageNum} cache={cache} setCache={setCache}/>
			<Clock cache={cache} pageNum={pageNum}/>
		</div>
    </div>
  );
}

export default App;
