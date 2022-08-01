import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 *  [x] - Definir o tipo de retorno da função
 *  [x] - Alterar o retorno de erro
 *  [x] - Acessar o repositorio
 */

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };