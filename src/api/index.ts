import axios from "axios";
const apiPath = "https://pokeapi.co/api/v2/";

export const getPokemonByUrl = async (url: string) => {
	const resp = await axios.get(url);
	return resp;
};

export const getPokemons = async (limit: number = 10, offset: number = 0) => {
	let result;

	const resp = await axios.get(
		`${apiPath}pokemon?limit=${limit}&offset=${offset}`
	);

	if (resp.data) {
		const promises = resp.data.results.map((el: any) =>
			getPokemonByUrl(el.url).then((res) => ({ ...el, ...res.data }))
		);
		result = await Promise.all(promises);
	}
	return result;
};
