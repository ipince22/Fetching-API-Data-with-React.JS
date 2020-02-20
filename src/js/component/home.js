import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [people, setPeople] = useState([]);
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
				console.log(data);
			});
	}, []);

	return (
		<>
			<div className="list-group">
				{people.map((item, index) => {
					return (
						<div
							onClick={() => {
								alert(item.films);
							}}
							className="list-group-item list-group-item-action"
							key={index}>
							{item.name}
						</div>
					);
				})}
			</div>
		</>
	);
}
