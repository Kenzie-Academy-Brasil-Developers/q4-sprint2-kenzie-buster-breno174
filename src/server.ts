import app from "./index";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
