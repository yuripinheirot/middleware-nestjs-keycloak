export type PokemonApiType = {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
};
