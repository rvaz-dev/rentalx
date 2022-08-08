import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoryRepository";

/**
 * CategoriesRepository
 * Using DTO: Data Transfer Object
 */

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  // Create category
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // create category
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  // Lists all categories
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  // Find category by name
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });
    return category;
  }
}

export { CategoriesRepository };
