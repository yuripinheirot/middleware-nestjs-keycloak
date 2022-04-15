import { app, port } from './src/app';

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
