import React from "react";
import {
	Grid,
	Dialog,
	TextField,
	Button,
	Paper,
	Typography,
	InputLabel,
	Select,
	OutlinedInput,
	MenuItem,
} from "@mui/material";

import { POKEMON_TYPES } from "utils/constants";

const AddPokemonDialog = ({ open, onConfirm, onCancel }) => {
	const [name, setName] = React.useState("");
	const [types, setTypes] = React.useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setTypes(typeof value === "string" ? value.split(",") : value);
	};

	const handleSave = () => {
		onConfirm({
			name,
			types,
		});
		setName("");
		setTypes([]);
	};

	return (
		<Dialog open={open}>
			<Paper sx={{ p: 2 }}>
				<Grid container sx={{ rowGap: "16px" }}>
					<Grid item xs={12}>
						<Typography>Create your pokemon</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Name"
							fullWidth
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<InputLabel id="type-selector" >
							Type
						</InputLabel>
						<Select
							labelId="type-selector"
							id="type-selector"
							label="Type"
							multiple
							value={types}
							onChange={handleChange}
							input={<OutlinedInput label="Type" />}
							fullWidth
						>
							{Object.values(POKEMON_TYPES).map(({ type }) => (
								<MenuItem key={type} value={type}>
									{type}
								</MenuItem>
							))}
						</Select>
					</Grid>

					<Grid item xs={12}>
						<Grid
							container
							sx={{
								columnGap: "10px",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Grid item xs={5}>
								<Button
									onClick={onCancel}
									color="secondary"
									variant="outlined"
									fullWidth
								>
									Cancel
								</Button>
							</Grid>
							<Grid item xs={5}>
								<Button
									onClick={handleSave}
									variant="outlined"
									fullWidth
								>
									Save
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Dialog>
	);
};

export default AddPokemonDialog;
