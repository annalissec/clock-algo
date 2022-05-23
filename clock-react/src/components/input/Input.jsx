import "./input.scss";

import React, { useState } from 'react'

export default function Input({cacheSize, setCacheSize}) {

	const [data, setData] = useState("")

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
			<input type='text'/>
			<button>Enter Page Number</button>
		</div>
	</div>
  )
}
