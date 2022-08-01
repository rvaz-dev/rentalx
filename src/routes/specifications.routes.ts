import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

/**
 * @route   POST /api/specifications
 * @desc    Create a new specification
 * @access  Public
 */
specificationRoutes.post("/", async (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
