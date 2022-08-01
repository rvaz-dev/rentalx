// libraries
import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = 8080;

app.use(express.json());

// swagger config
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// routes
app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
