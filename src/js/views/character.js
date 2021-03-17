import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src="https://via.placeholder.com/800x600" width="auto" height="416" />
				</div>
				<div className="col-md-6">
					<div className="card-body text-center">
						<h1 className="card-title">
							{store.characters.length == 10 && store.characters[params.id].name}
						</h1>
						<p className="card-text h5">
							Sed ut perspiciatis unde omnis iste natus error sit voliptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo iventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi
						</p>
					</div>
				</div>
			</div>
			<div className="border-top border-danger mt-4">
				<div className="row text-danger text-center h6">
					<div className="col">Name</div>
					<div className="col">Birth Day</div>
					<div className="col">Gender</div>
					<div className="col">Height</div>
					<div className="col">Skin Color</div>
					<div className="col">Eye Color</div>
				</div>
				<div className="row text-danger text-center">
					<div className="col">{store.characters.length == 10 && store.characters[params.id].name}</div>
					<div className="col">{store.characters.length == 10 && store.characters[params.id].birth_year}</div>
					<div className="col">{store.characters.length == 10 && store.characters[params.id].gender}</div>
					<div className="col">{store.characters.length == 10 && store.characters[params.id].height}</div>
					<div className="col">{store.characters.length == 10 && store.characters[params.id].skin_color}</div>
					<div className="col">{store.characters.length == 10 && store.characters[params.id].eye_color}</div>
				</div>
			</div>
		</div>
	);
};
