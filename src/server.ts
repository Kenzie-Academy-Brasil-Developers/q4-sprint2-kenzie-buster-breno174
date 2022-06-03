import { AppDataSource } from "./data-source";
import app from "./index";
import * as dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
