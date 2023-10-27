export type PokemonApiType = {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
};

type flavorTextEntries = {
  flavor_text: string;
};

export type PokemonSpecieApiType = {
  flavor_text_entries: flavorTextEntries[];
};
