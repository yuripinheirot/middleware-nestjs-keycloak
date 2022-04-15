export class CustomError extends Error {
	constructor(public module: string, message: string, public statusCode: number = 400) {
		super(message);
	}
}