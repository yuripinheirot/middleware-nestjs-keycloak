export type flavorTextEntriesType = {
  flavor_text: string;
  language: {
    name: string;
  };
};

export type PokemonSpecieApiType = {
  flavor_text_entries: flavorTextEntriesType[];
};
