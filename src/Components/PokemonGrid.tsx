import React, { useContext } from "react";
import { getPokemons } from "../api";
import { Grid, Paper, Typography, Pagination } from "@mui/material";
import { NumberLiteralType } from "typescript";
import { PokemonContext } from "../context/PokemonContext";
interface Data {
	results: any[];
}
interface IPagination {
	count: number;
	offset: number;
	limit: number;
	pages: number;
}

const calculatePageCount = (total: number, perPage: number) => {
	return Math.round(total / perPage);
};

const calculateOffset = (actualPage: number, perPage: number) => {
	return Math.round(actualPage - 1) * perPage;
};

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
			getPokemons().then((res: any) => {
				setList(res.results);
				setPagination((prev: any) => ({
					...prev,
					count: res.count,
				}));
			});
		}
	}, [list, setList]);
	React.useEffect(() => {
		getPokemons(pagination.limit, pagination.offset).then((res: any) => {
			setList(res.results);
			setPagination((prev: any) => ({
				...prev,
				count: res.count,
			}));
		});
	}, [pagination]);

	const handlePageChange = (e, page) => {
		const newPagination = {
			count: pagination.count,
			limit: pagination.limit,
			offset: calculateOffset(page, pagination.limit),
			pages: calculatePageCount(pagination.count, pagination.limit),
		};
		setPagination(newPagination);
	};

	if (!Boolean(list.length) || !pagination) return null;
	return (
		<Grid container>
			<Grid item xs={12}>
				<Grid container>
					{list.map((el: any) => (
						<Grid
							key={el.id}
							item
							container
							xs={12}
							sm={6}
							md={4}
							lg={3}
							p={2}
						>
							<Paper elevation={2} sx={{ width: "100%", p: 2 }}>
								<Grid item xs={12}>
									<Typography
										sx={{ textAlign: "center" }}
										variant="h4"
									>
										{el.name.toUpperCase()}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant="subtitle1"
										sx={{ fontWeight: "bold" }}
									>
										Abilities
									</Typography>
									{el.abilities.map((el: any) => (
										<Typography key={el.ability.name}>
											{el.ability.name}
										</Typography>
									))}
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant="subtitle1"
										sx={{ fontWeight: "bold" }}
									>
										Stats
									</Typography>
									{el.stats.map((el: any) => (
										<Typography key={el.stat.name}>
											{el.stat.name} - {el.base_stat}
										</Typography>
									))}
								</Grid>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Pagination
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
