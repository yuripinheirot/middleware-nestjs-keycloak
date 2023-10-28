export type PokemonSpritesApiType = {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
};

export type PokemonApiType = {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSpritesApiType;
};

export type PokemonOffsetApiType = {
  name: string;
  url: string;
};

export type PokemonOffsetResponseApiType = {
  next: string;
  previous: string;
  results: PokemonOffsetApiType[];
};
