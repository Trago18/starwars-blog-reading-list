const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: []
		},
		actions: {
			addFavorite: (fav, id, selector) => {
				if (getStore().favorites.includes(fav)) {
				} else {
					setStore({ favorites: [...getStore().favorites, fav] });
				}
			},
			removeFavorite: fav => {
				const newFav = getStore().favorites.filter(value => {
					return value !== fav;
				});
				//console.log(newFav);
				setStore({ favorites: newFav });
			},
			loadData: () => {
				fetch(`https://swapi.dev/api/people/`)
					.then(res1 => res1.json())
					.then(data1 => {
						//console.log(data1);
						setStore({ characters: data1.results });
					});
				fetch(`https://swapi.dev/api/planets/`)
					.then(res2 => res2.json())
					.then(data2 => {
						//console.log(data2);
						setStore({ planets: data2.results });
					});
			}
		}
	};
};

export default getState;
