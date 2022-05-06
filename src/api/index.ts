import axios from "axios";
const apiPath = "https://pokeapi.co/api/v2/";

export const getPokemonByUrl = async (url: string) => {
	const resp = await axios.get(url);
	return resp;
};
export const getPokemonByName = async (name: string) => {
	const resp = await axios.get(`${apiPath}pokemon/${name}`);
	return resp.data;
};

export const getPokemons = async (limit: number = 10, offset: number = 0) => {
	const resp = await axios.get(
		`${apiPath}pokemon?limit=${limit}&offset=${offset}`
	);

	if (resp.data) {
		const promises = resp.data.results.map((el: any) =>
			getPokemonByUrl(el.url).then((res) => ({ ...el, ...res.data }))
		);
		resp.data.results = await Promise.all(promises);
	}
	resp.data.results = resp.data.results.map((pokemon) => ({
		...pokemon,
		types: pokemon.types.map(({ type }) => type.name),
	}));
	return resp.data;
};
