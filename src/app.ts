import express from 'express';
import cors from 'cors';

//routes
import pokedexRoute from './routes/pokedex';

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

app.use('/pokedex', pokedexRoute);

export { app, port };
