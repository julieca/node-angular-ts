import { Controller } from '@tsed/di'

import { Get } from '@tsed/schema'
import { ProductsService } from '../services/product'
// import { envs } from 'src/config/env'

@Controller('/')
export class ProductController {
  // private db
  constructor(public productsService: ProductsService) {}

  @Get('/list') async list() {
    const products = await this.productsService.query({brandName: "Aurora"})
    return { status: 200, data: products }
  }
}