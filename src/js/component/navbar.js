import React, { useContext } from "react";
import sw from "../../img/star-wars.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	// href={`/${value[2]}/${value[1]}`}

	let arr = store.favorites;
	let loop = arr.map((value, index) => {
		return (
			<li key={index}>
				<a className="dropdown-item" href="#">
					{value} <i onClick={() => actions.removeFavorite(value)} className="fas fa-trash"></i>
				</a>
			</li>
		);
	});

	let num = arr.length;

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand">
						<img src={sw} width="100" height="60" />
					</span>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites <span className="badge bg-secondary">{num}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{loop}
					</ul>
				</div>
			</div>
		</nav>
	);
};
