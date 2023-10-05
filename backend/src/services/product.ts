import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Product} from "../model/product";


@Service()
export class ProductsService {
  @Inject(Product)
  private Product: MongooseModel<Product>;

  /**
   * Find a Product by his ID.
   * @param id
   * @returns {undefined|Product}
   */
  async find(id: string): Promise<Product> {
    const Product = await this.Product.findById(id).exec();
    return Product;
  }

  /**
   *
   * @param Product
   * @returns {Promise<TResult|TResult2|Product>}
   */
  async save(Product: Product): Promise<Product> {

    const model = new this.Product(Product);
    await model.updateOne(Product, {upsert: true});
    return model;
  }

  /**
   *
   * @returns {Product[]}
   */
  async query(options = {}): Promise<Product[]> {
    console.log(this.Product)
    return this.Product.find(options).exec();
  }

  /**
   *
   * @param id
   * @returns {Promise<Product>}
   */
  async remove(id: string): Promise<Product> {
    const product = await this.Product.findById(id).exec();
    return product
  }
}
