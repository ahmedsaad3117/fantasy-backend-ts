import express, { Request, Response, NextFunction } from "express";
import playersRoute from "./routes/players";
import { connectionMong } from "./db/mongoose"; 

const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use("/players", playersRoute);

app.get('/', (req, res) => {
    res.send('test working');
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});


app.listen(port, () => {
    console.log("Server is up on " + port);
});
