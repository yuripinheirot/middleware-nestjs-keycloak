import express from 'express';
import cors from 'cors';

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

export { app, port };
