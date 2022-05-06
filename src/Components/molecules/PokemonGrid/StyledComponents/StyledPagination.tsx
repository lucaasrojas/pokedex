import { Pagination } from "@mui/material";
import { styled } from "@mui/system";

export default styled(Pagination)(() => ({
	"& > ul > li > button": {
		color: "white",
	},
	"& > ul > li > div": {
		color: "white",
	},
}));
