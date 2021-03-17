import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = ({ character, planet, selector, id }) => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-4">
			<div className="card">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					{selector == "character" ? (
						<>
							<h5 className="card-title">{character.name}</h5>
							<p className="card-text">Gender: {character.gender}</p>
							<p className="card-text">Hair Color: {character.hair_color}</p>
							<p className="card-text">Eye Color: {character.eye_color}</p>
						</>
					) : (
						<>
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">Population: {planet.population}</p>
							<p className="card-text">Terrain: {planet.terrain}</p>
						</>
					)}
					<Link to={`${selector == "character" ? "/character/" : "/planet/"}${id}`}>
						<button type="button" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						onClick={() =>
							selector == "character"
								? actions.addFavorite(character.name, id, selector)
								: actions.addFavorite(planet.name, id, selector)
						}
						type="button"
						className="btn btn-outline-warning float-end">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	character: PropTypes.object,
	planet: PropTypes.object,
	selector: PropTypes.string,
	id: PropTypes.number
};
