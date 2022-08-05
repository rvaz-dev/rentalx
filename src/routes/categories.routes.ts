import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/listCategoriesController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

// Constants
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

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
categoriesRoutes.get("/", listCategoriesController.handle);

/**
 * @route POST /api/categories/import
 * @desc Import file with categories
 * @access Public
 */

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
