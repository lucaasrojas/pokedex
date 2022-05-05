import React from "react";
import { getPokemons } from "../api";
import { Grid, Paper, Typography } from "@mui/material";
const PokemonGrid = () => {
	const [list, setList] = React.useState([]);
	React.useEffect(() => {
		if (!list.length) {
			getPokemons().then((res: any) => setList(res));
		}
	}, [list]);

	return (
		<Grid container>
			{list.map((el: any) => (
				<Grid item container xs={12} sm={6} md={4} lg={3} p={2}>
					<Paper elevation={2} sx={{width: "100%", p:2}} >

					
					<Grid item xs={12}>
						<Typography sx={{textAlign: "center"}} variant="h4">{el.name.toUpperCase()}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle1" sx={{fontWeight: "bold"}}>Abilities</Typography>
						{el.abilities.map((el: any) => (
							<Typography>{el.ability.name}</Typography>
						))}
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle1" sx={{fontWeight: "bold"}}>Stats</Typography>
						{el.stats.map((el: any) => (
							<Typography>
								{el.stat.name} - {el.base_stat}
							</Typography>
						))}
					</Grid>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default PokemonGrid;
