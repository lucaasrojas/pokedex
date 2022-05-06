import React, { useContext } from "react";
import { Card, AddPokemonDialog } from "Components";
import { Grid, Button, Typography } from "@mui/material";
import { PokemonContext } from "context/PokemonContext";
import { Pokemon } from "interfaces";

const MyPokemonsList = () => {
	const { myList, setMyList } = useContext(PokemonContext);
	const [showAddModal, setShowAddModal] = React.useState(false);

	const handleAddPokemon = (pokemon) => {
		setMyList([...myList, pokemon]);
		setShowAddModal(false);
	};
	return (
		<Grid container>
			<AddPokemonDialog
				open={showAddModal}
				onCancel={() => setShowAddModal(false)}
				onConfirm={(name) => handleAddPokemon(name)}
			/>
			<Grid item xs={12} sx={{ display: "flex", placeContent: "center" }}>
				{Boolean(myList.length) && (
					<Typography
						variant="h6"
						sx={{ color: "white", marginRight: 2 }}
					>
						My Pokemons
					</Typography>
				)}
				<Button
					onClick={() => setShowAddModal(true)}
					variant="contained"
					color="success"
				>
					Add Pokemon
				</Button>
			</Grid>
			<Grid item xs={12}>
				<Grid
					container
					sx={{
						flexFlow: "nowrap",
						columnGap: "5px",
						flexDirection: "row",
						maxWidth: "100%",
						overflowX: "scroll",
					}}
				>
					{myList.map((pokemon: Pokemon) => (
						<Grid key={pokemon.name} item xs={2}>
							<Card pokemon={pokemon} custom={true} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MyPokemonsList;
