import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setPeople(data;
			});
	}, []);

	return (
		<>
			{people.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
		</>
	);
}
