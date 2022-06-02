import "./clock.scss";


import React, { useEffect } from 'react'

export default function Clock({cache, pageNum}) {

  return (
	<div className="clock">
	<div className="table">
		<table>
			<thead>
				<tr>
					<th>Page Stream</th>
					<th>Cache</th>
				</tr>
			</thead>
			<tbody>
				{cache &&
					cache.pageStream.map((item) => (
						<tr key={item}>
							<td>{item}</td>
						</tr>
					))
				}
				{cache &&
					cache.cache.map((item) => (
						<tr key={item.pageNum}>
							<td>{item.pageNum}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	</div>
</div>
  )
}
