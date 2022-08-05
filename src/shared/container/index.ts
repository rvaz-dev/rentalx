import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificatiomRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificatiomRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  "CategoriesRepository",
  SpecificationRepository
);
