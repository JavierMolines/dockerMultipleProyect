import express, { Request, Response } from "express";
const app = express();
const port = 2031;

app.get("/", function (req: Request, res: Response) {
	res.json({
		message: "Hello XML Server!.",
	});
});

app.listen(port, () => {
	console.log(`Server on port ${port}!.`);
});
