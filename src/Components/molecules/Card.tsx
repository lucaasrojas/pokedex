import React from "react";
import { Pokemon } from "../../interfaces";
import { Grid, Paper, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ pokemon, sx, custom }: { pokemon: Pokemon; sx?: any, custom?:boolean }) => {
	return (
		<Link to={!custom ? `/${pokemon.name}` : ""} style={{ textDecoration: "none" }}>
			<Paper elevation={2} sx={{ p: 2, ...sx }}>
				<Grid item xs={12}>
					<Typography
						sx={{ textAlign: "center", whiteSpace: "nowrap" }}
						variant="h4"
					>
						{pokemon.name.toUpperCase()}
					</Typography>
				</Grid>
				{pokemon.types && (
					<Grid item container xs={12} gap={2} sx={{borderTop: "1px solid #dadada", paddingTop: "10px"}}>
						{pokemon.types.map((type: any) => (
							<Grid item>
								<Chip label={type.type.name.toUpperCase()} />
							</Grid>
						))}
					</Grid>
				)}
			</Paper>
		</Link>
	);
};

export default React.memo(Card);
