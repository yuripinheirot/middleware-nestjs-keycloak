import { app } from './app';
import pokedexRoute from './routes/pokedex';

app.use('/pokedex', pokedexRoute);
