import { render, waitFor } from "@testing-library/react";
import PokemonDetail from "./PokemonDetail";
import { BrowserRouter } from "react-router-dom";
import * as Api from "api";
const mockedPokemon = {
	name: "MyPokemon",
	abilities: [{ ability: { name: "punch" } }],
	stats: [{ stat: { name: "hp" }, base_stat: 300 }],
};
test("Render name, abilities and stats", async () => {
	jest.spyOn(Api, "getPokemonByName").mockImplementation(() =>
		Promise.resolve(mockedPokemon)
	);
	const wrapper = render(
		<BrowserRouter>
			<PokemonDetail />
		</BrowserRouter>
	);
	await waitFor(() => {
		const name = wrapper.getByText(mockedPokemon.name.toUpperCase());
		const ability = wrapper.getByText(
			mockedPokemon.abilities[0].ability.name.toUpperCase()
		);
		const statName = wrapper.getByText(
			mockedPokemon.stats[0].stat.name.toUpperCase()
		);
		expect(name).toBeInTheDocument();
		expect(ability).toBeInTheDocument();
		expect(statName).toBeInTheDocument();
	});
});
