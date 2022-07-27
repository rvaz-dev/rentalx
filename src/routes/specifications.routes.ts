import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificatiomRepository";
import { CreateSpecificationService } from "../modules/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

/**
 * @route   POST /api/specifications
 * @desc    Create a new specification
 * @access  Public
 */
specificationRoutes.post("/", async (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
