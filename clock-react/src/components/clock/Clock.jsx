import "./clock.scss";


import React, { useEffect, useState } from 'react'

export default function Clock({cache}) {

	useEffect(() => {
		console.log(cache)
	})

	function renderItems(){
		var list = cache.cache.map((item, index) => {
			return <li 
			key={index}
			style={{color: parseInt(index) === parseInt(cache.clockHand) ? "red" : "black"}}
			>
				{item.pageNum} 
			</li>
	})
	return list
	}

	function renderList(){
		var list = cache.pageStream.map((item, index) => {
			return <li 
			key={index}
			>
				{item}
			</li>
	})
	return list
	}

  return (
	<div className="clock">
	<div className="table">
		<div className="col1">
		<h1>Cache</h1>
			<ul>
				<div className="list">
					{cache && renderItems()}
				</div>
			</ul>
		</div>

		<div className="col2">
			<h1>Page Stream</h1>
			<ul>
				<div className="list">
					{cache && renderList()}
				</div>
			</ul>
		</div>
	</div>

	<div className="message">
			{cache.cacheMessage}
		</div>
		
</div>
  )
}
