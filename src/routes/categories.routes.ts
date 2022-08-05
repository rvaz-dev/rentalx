import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

// Constants
const createCategoryController = new CreateCategoryController();

/**
 * @route   POST /api/categories
 * @desc    Create a new category
 * @access  Public
 */
categoriesRoutes.post("/", createCategoryController.handle);

/**
 * @route   GET /api/categories
 * @desc    Get all categories
 * @access  Public
 */
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

/**
 * @route POST /api/categories/import
 * @desc Import file with categories
 * @access Public
 */

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
