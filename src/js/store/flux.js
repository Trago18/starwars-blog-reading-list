const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: { name: [], id: [], sel: [], icon: "far" },
			characters: [],
			planets: []
		},
		actions: {
			addFavorite: (fav, id, sel) => {
				if (getStore().favorites.name.includes(fav)) {
				} else {
					setStore({
						favorites: {
							name: [...getStore().favorites.name, fav],
							id: [...getStore().favorites.id, id],
							sel: [...getStore().favorites.sel, sel]
						}
					});
				}
			},
			removeFavorite: fav => {
				const id = getStore().favorites.name.indexOf(fav);
				const newFav = getStore().favorites.name.filter(value => {
					return value !== fav;
				});
				const newId = getStore().favorites.id.filter((value, index) => {
					return index !== id;
				});
				const newSel = getStore().favorites.sel.filter((value, index) => {
					return index !== id;
				});
				//console.log(newFav);
				setStore({ favorites: { name: newFav, id: newId, sel: newSel } });
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
