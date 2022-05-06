export const calculatePageCount = (total: number, perPage: number) => {
	return Math.round(total / perPage);
};

export const calculateOffset = (actualPage: number, perPage: number) => {
	return Math.round(actualPage - 1) * perPage;
};
