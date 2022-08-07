import express, { Request, Response, NextFunction } from "express";
import playersRoute from "./routes/players";

const app = express();

app.use("/players", playersRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
