import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { PokemonGrid, PokemonDetail } from "./Components";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
	return (
		<Box className="App">
			<header style={{ display: "flex", placeContent: "center" }}>
				<img src={logo} style={{ maxHeight: "100px" }} alt="logo" />
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
