import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { PokemonGrid } from "./Components";
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
            <PokemonGrid/>
          </Grid>
				</Grid>
			</main>
		</Box>
	);
}

export default App;
