import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

// Constants
const createSpecificationController = new CreateSpecificationController();

/**
 * @route   POST /api/specifications
 * @desc    Create a new specification
 * @access  Public
 */
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
