import "express-async-errors";
import express from "express";
import regirtesrRotes from "./routes/routes";

const app = express();
app.use(express.json());

regirtesrRotes(app);

export default app;
