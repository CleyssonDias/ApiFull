import { UserContoller } from "@controllers/UserContoller";
import express from 'express';
const app = express();
const m = new UserContoller().handle()

app.get('/', (req, res) => {
    res.json({message: m})
});

app.listen(4444);