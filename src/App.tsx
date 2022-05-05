import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";
import { PokemonGrid, PokemonDetail } from "./Components";
import "./App.css";

function App() {
	return (
		<Box className="App">
			<header>
				<Typography variant="h1">Pokedex</Typography>
			</header>
			<main className="App-main">
				<Grid container>
					<Grid item xs={12}>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<PokemonGrid />} />
								<Route
									path="/:name"
									element={<PokemonDetail />}
								/>
							</Routes>
						</BrowserRouter>
					</Grid>
				</Grid>
			</main>
		</Box>
	);
}

export default App;
