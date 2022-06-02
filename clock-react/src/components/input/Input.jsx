import "./input.scss";
import { Cache } from "../cache/Cache";

import React, { useEffect, useState } from 'react'

export default function Input({cacheSize, setCacheSize, pageNum, setPageNum, cache, setCache}) {

	const [data, setData] = useState("")

	useEffect(() => {
		setCache(new Cache(cacheSize))
	}, [cacheSize, setCache])

	useEffect(() => {
		if (Number.isInteger(parseInt(pageNum)))
		cache.pageCall(pageNum)
		console.log(cache)
	}, [pageNum, cache])

	function getData(val) {
		setData(val.target.value)
	}

  return (
	<div className="input">
		<div className="cache">
			<span>Cache Size: </span>
			<input type='text' onChange={getData}/>
			<button onClick={() => setCacheSize(data)}>Set Cache Size</button>
		</div>
		<div className="pageNum">
			<span>Page Num: </span>
			<input type='text' onChange={getData}/>
			<button onClick={() => setPageNum(data)}>Enter Page Number</button>
		</div>

	</div>
  )
}
