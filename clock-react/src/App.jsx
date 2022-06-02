import "./app.scss"
import Input from "./components/input/Input"
import { useState, useEffect } from "react";
import Clock from "./components/clock/Clock";
import { Cache } from "./components/cache/Cache";

function App() {

	const [cacheSize, setCacheSize] = useState("")
	const [pageNum, setPageNum] = useState("")
	const [cache, setCache] = useState("")

	useEffect(() => {
		setCache(new Cache(cacheSize))
	}, [cacheSize, setCache])

	useEffect(() => {
		console.log(pageNum)
		if (Number.isInteger(parseInt(pageNum)))
		cache.pageCall(pageNum)
		setCache(cache)
	}, [pageNum, cache])

  return (
    <div className="app">
		<div className="title">Clock Algorithm: {}</div>
		<div className="section">
			<Input cacheSize={cacheSize} setCacheSize={setCacheSize} pageNum={pageNum} setPageNum={setPageNum}/>
			<Clock cache={cache}/>
		</div>
    </div>
  );
}

export default App;
