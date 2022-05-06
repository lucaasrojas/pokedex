import React from "react";
import {
	Grid,
	Dialog,
	TextField,
	Button,
	Paper,
	Typography,
} from "@mui/material";

const AddPokemonDialog = ({ open, onConfirm, onCancel }) => {
	const [name, setName] = React.useState("");

	return (
		<Dialog open={open}>
			<Paper sx={{ p: 2 }}>
				<Grid container sx={{ rowGap: "16px" }}>
					<Grid item xs={12}>
						<Typography>Enter your pokemon name</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Pokemon Name"
							fullWidth
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
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
									onClick={() => {onConfirm(name);setName("")}}
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
