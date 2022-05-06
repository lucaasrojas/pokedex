export interface Ability {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
}

export interface Pokemon {
	name: string;
	abilities: Ability[];
	stats: Stat[];
	types: String[];
}

export interface IPagination {
	count: number;
	offset: number;
	limit: number;
	pages: number;
}

export interface PokemonResponse {
	results: Pokemon[];
	count: number;
}
