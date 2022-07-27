// libraries
import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

// routes imports

const app = express();
const port = 8080;

app.use(express.json());

// routes
app.use("/api/categories", categoriesRoutes);
app.use("/api/specifications", specificationRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
