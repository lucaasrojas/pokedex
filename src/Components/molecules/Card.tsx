import { Pokemon } from "../../interfaces";
import { Grid, Paper, Typography } from "@mui/material";

const Card = ({ pokemon, sx }: { pokemon: Pokemon; sx?: any }) => {
	return (
		<Paper elevation={2} sx={{ p: 2, ...sx }}>
			<Grid item xs={12}>
				<Typography sx={{ textAlign: "center", whiteSpace: "nowrap" }} variant="h4">
					{pokemon.name.toUpperCase()}
				</Typography>
			</Grid>
			{pokemon.abilities && (
				<Grid item xs={12}>
					<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
						Abilities
					</Typography>
					{pokemon.abilities.map((el: any) => (
						<Typography key={el.ability.name}>
							{el.ability.name}
						</Typography>
					))}
				</Grid>
			)}
			{pokemon.stats && (
				<Grid item xs={12}>
					<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
						Stats
					</Typography>
					{pokemon.stats.map((el: any) => (
						<Typography key={el.stat.name}>
							{el.stat.name} - {el.base_stat}
						</Typography>
					))}
				</Grid>
			)}
		</Paper>
	);
};

export default Card;
