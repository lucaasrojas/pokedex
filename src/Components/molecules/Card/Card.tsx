import React from "react";
import { Pokemon } from "interfaces";
import { Grid, Paper, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { POKEMON_TYPES } from "utils/constants";
interface CardProps {
	pokemon: Pokemon;
	sx?: any;
	custom?: boolean;
}
const Card: React.FC<CardProps> = ({ pokemon, sx, custom }) => {
	return (
		<Link
			to={!custom ? `/${pokemon.name}` : ""}
			style={{ textDecoration: "none" }}
		>
			<Paper elevation={2} sx={{ p: 2, ...sx }}>
				<Grid item xs={12}>
					<Typography
						sx={{
							textAlign: "center",
							whiteSpace: "nowrap",
							fontFamily: "Roboto",
						}}
						variant="h4"
					>
						{pokemon.name.toUpperCase()}
					</Typography>
				</Grid>
				{pokemon.types && (
					<Grid
						item
						container
						xs={12}
						gap={2}
						sx={{
							borderTop: "1px solid #dadada",
							paddingTop: "10px",
						}}
					>
						{pokemon.types.map((type: string) => (
							<Grid item key={type}>
								<Chip
									label={type.toUpperCase()}
									sx={{
										backgroundColor: `${POKEMON_TYPES[type].color}55`,
										border: `2px solid ${POKEMON_TYPES[type].color}`,
									}}
								/>
							</Grid>
						))}
					</Grid>
				)}
			</Paper>
		</Link>
	);
};

export default React.memo(Card);
