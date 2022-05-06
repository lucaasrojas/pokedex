import React, { useContext } from "react";
import { getPokemons } from "api";
import { Card, MyPokemonsList } from "Components";
import { Grid, Stack } from "@mui/material";
import { PokemonContext } from "context/PokemonContext";
import { calculateOffset, calculatePageCount } from "utils";
import { IPagination, PokemonResponse } from "interfaces";
import { StyledPagination } from "./StyledComponents";

const PokemonGrid = () => {
	const { list, setList } = useContext(PokemonContext);

	const [pagination, setPagination] = React.useState<IPagination>({
		count: 0,
		offset: 0,
		limit: 10,
		pages: 1,
	});

	React.useEffect(() => {
		if (!Boolean(list?.length)) {
			getPokemons().then((res: PokemonResponse) => {
				setList(res.results);
				setPagination((prev: IPagination) => ({
					...prev,
					count: res.count,
				}));
			});
		}
	}, [list, setList]);

	const handlePageChange = (e, page) => {
		const offset = calculateOffset(page, pagination.limit);
		getPokemons(pagination.limit, offset).then((res: PokemonResponse) => {
			setList(res.results);
			setPagination((prev: IPagination) => ({
				...prev,
				count: res.count,
				pages: calculatePageCount(res.count, pagination.limit),
			}));
		});
	};

	if (!Boolean(list.length) || !pagination) return null;
	return (
		<Grid container p={2} rowGap={2}>
			<Grid item xs={12}>
				<MyPokemonsList />
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
				<Stack spacing={2}>
					<StyledPagination
						color="primary"
						count={calculatePageCount(
							pagination.count,
							pagination.limit
						)}
						onChange={handlePageChange}
					/>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default PokemonGrid;
