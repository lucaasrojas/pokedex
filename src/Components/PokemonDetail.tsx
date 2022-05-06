import React from "react";
import { Grid, Paper, Typography, LinearProgress, Chip, Box, Button } from "@mui/material";
import { Link, useParams, } from "react-router-dom";
import { getPokemonByName } from "../api";
import { Pokemon, Ability, Stat } from "../interfaces";

const PokemonDetail = () => {
	const params = useParams();
	const [pokemon, setPokemon] = React.useState<Pokemon>();

	React.useEffect(() => {
		if (!pokemon) {
			getPokemonByName(params.name)
			.then((res) => setPokemon(res))
		}
	}, [params.name, pokemon]);
	if (!pokemon) return null;
	return (
		<Box sx={{maxWidth: "800px", margin: "0 auto", display: "flex", alignContent: "center", flexDirection: "column"}}>
			<Paper elevation={2} sx={{ p: 2, m: 2 }}>
				<Grid container>
					<Grid item xs={12}>
						<Typography sx={{ textAlign: "center" }} variant="h4">
							{pokemon.name.toUpperCase()}
						</Typography>
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={12} md={6}>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: "bold" }}
							>
								Abilities
							</Typography>

							<Grid item container gap={2} xs={12}>
								{pokemon.abilities.map((el: Ability) => (
									<Grid item>
										<Chip
											key={el.ability.name}
											label={el.ability.name.toUpperCase()}
										/>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: "bold" }}
							>
								Stats
							</Typography>
							{pokemon.stats.map((el: Stat) => (
								<>
									<Typography
										variant="body1"
										key={el.stat.name}
									>
										{el.stat.name.toUpperCase()}
									</Typography>
									<LinearProgress
										variant="determinate"
										value={(el.base_stat * 100) / 500}
									/>
								</>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Paper>
			<Link to="/" style={{margin:"auto"}}><Button variant="contained" >Home</Button></Link>
		</Box>
	);
};

export default PokemonDetail;
