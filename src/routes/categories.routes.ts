import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

/**
 * @route   POST /api/categories
 * @desc    Create a new category
 * @access  Public
 */
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

/**
 * @route   GET /api/categories
 * @desc    Get all categories
 * @access  Public
 */
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

/**
 * @route POST /api/categories/import
 * @desc Import file with categories
 * @access Public
 */

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
