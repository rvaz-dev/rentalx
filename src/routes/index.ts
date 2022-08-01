import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

// routes
router.use("/api/categories", categoriesRoutes);
router.use("/api/specifications", specificationRoutes);

export { router };
