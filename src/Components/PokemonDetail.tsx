import React from "react";
import { Grid, Paper, Typography,LinearProgress  } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../api";
interface Ability {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

interface Stat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}
interface Pokemon {
	name: string;
	abilities: Ability[];
	stats: Stat[];
}
const PokemonDetail = () => {
	const params = useParams();
	const [pokemon, setPokemon] = React.useState<Pokemon>();

	React.useEffect(() => {
		if (!pokemon) {
			getPokemonByName(params.name).then((res) => setPokemon(res));
		}
	}, [params.name, pokemon]);
	if (!pokemon) return null;
	return (
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
						{pokemon.abilities.map((el: Ability) => (
							<Typography key={el.ability.name}>
								{el.ability.name}
							</Typography>
						))}
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
							<Typography variant="body1" key={el.stat.name}>
								{el.stat.name}
							</Typography>
                            <LinearProgress variant="determinate"  value={el.base_stat}/>
                            </>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default PokemonDetail;
