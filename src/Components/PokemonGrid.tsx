import React, { useContext } from "react";
import { getPokemons } from "../api";
import { Card, AddPokemonDialog } from "../Components";
import { Grid, Pagination, Button, Typography } from "@mui/material";

import { PokemonContext } from "../context/PokemonContext";
import { Pokemon } from "../interfaces";
import { calculateOffset, calculatePageCount } from "../utils";

interface IPagination {
	count: number;
	offset: number;
	limit: number;
	pages: number;
}

const PokemonGrid = () => {
	const { list, setList, myList, setMyList } = useContext(PokemonContext);
	const [showAddModal, setShowAddModal] = React.useState(false);
	const [pagination, setPagination] = React.useState<IPagination>({
		count: 0,
		offset: 0,
		limit: 10,
		pages: 1,
	});

	React.useEffect(() => {
		if (!Boolean(list?.length)) {
			getPokemons().then((res: any) => {
				setList(res.results);
				setPagination((prev: any) => ({
					...prev,
					count: res.count,
				}));
			});
		}
	}, [list, setList]);

	const handlePageChange = (e, page) => {
		const offset = calculateOffset(page, pagination.limit);
		getPokemons(pagination.limit, offset).then((res: any) => {
			setList(res.results);
			setPagination((prev: any) => ({
				...prev,
				count: res.count,
				pages: calculatePageCount(res.count, pagination.limit),
			}));
		});
	};

	const handleAddPokemon = (name) => {
		setMyList([...myList, { name }]);
		setShowAddModal(false);
	};

	if (!Boolean(list.length) || !pagination) return null;
	return (
		<Grid container p={2} rowGap={2}>
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
			<Grid item xs={12}>
				<Grid container gap={1} sx={{ justifyContent: "center" }}>
					{list.map((el: any) => (
						<Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
							<Card pokemon={el} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					display: "flex",
					justifyContent: "center",
					color: "white",
				}}
			>
				<Pagination
					color="primary"
					sx={{ color: "white" }}
					count={calculatePageCount(
						pagination.count,
						pagination.limit
					)}
					onChange={handlePageChange}
				/>
			</Grid>
		</Grid>
	);
};

export default PokemonGrid;
