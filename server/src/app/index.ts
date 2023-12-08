import express, { Request, Response } from "express";
import { fetch } from "./fetch";
import { loggerMiddleware } from "./middleware";

const app = express();
const port = 2031;

app.use(loggerMiddleware);

app.get("/", async (req: Request, res: Response) => {
	const data = await fetch("https://randomuser.me/api/");
	res.json({
		message: "Random User!.",
		data,
	});
});

app.listen(port, () => {
	console.log(`Server on port ${port}!.`);
});
