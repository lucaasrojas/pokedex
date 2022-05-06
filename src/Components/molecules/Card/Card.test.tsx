import { render } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemon } from "interfaces";
const mockedPokemon: Pokemon = {
	name: "MyPokemon",
	types: ["fire"],
	abilities: [],
	stats: [],
};
test("Render name and type", () => {
	const wrapper = render(
		<BrowserRouter>
			<Card pokemon={mockedPokemon} />
		</BrowserRouter>
	);
	const name = wrapper.getByText(mockedPokemon.name.toUpperCase());
	const type = wrapper.getByText(mockedPokemon.types[0].toUpperCase());
	expect(name).toBeInTheDocument();
	expect(type).toBeInTheDocument();
});
