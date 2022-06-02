import "./input.scss";


import React, { useState } from 'react'

export default function Input({cacheSize, setCacheSize, pageNum, setPageNum}) {

	const [data, setData] = useState("")
	const [page, setPage] = useState("")
	const [show, setShow] = useState(true)

	function handlePage(val)  {
		setPageNum(val)
		setPage("")
	}
	function handleSize(val)  {
		setCacheSize(val)
		setData("")
		setShow(false)
	}

  return (
	<div className="input">
		{show && <div className="cache">
			<span>Cache Size: </span>
			<input type='text' value={data} onChange={(data) => setData(data.target.value)} onKeyDown={(ev) => {
				if (ev.key === 'Enter') {
					ev.preventDefault()
					handleSize(ev.target.value)
				}
			}}/>
			<button onClick={() => handleSize(data)}>Set Cache Size</button>
		</div>}
		
		{!show && <div className="pageNum">
			<span>Page Num: </span>
			<input type='text' value={page} onChange={(page) => setPage(page.target.value)} onKeyDown={(ev) => {
				if (ev.key === 'Enter') {
					ev.preventDefault()
					handlePage(ev.target.value)
				}
			}}/>
			<button onClick={() => handlePage(page)}>Enter Page Number</button>
		</div>}

		{!show && <button onClick={() => setShow(true)}>Reset Cache Size</button>}
	</div>
  )
}
