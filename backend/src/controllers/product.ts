import { Controller } from '@tsed/di'

import { QueryParams } from '@tsed/common'
import { Default, Get, Returns } from '@tsed/schema'
import { FilterQuery } from 'mongoose'
import { ProductListEntity } from '../entities/productlist'
import { Product } from '../model/product'
import { ProductsService } from '../services/product'
import { OrderDir } from '../utils/pagination'

const allowedOrderBy = ['stock', 'price']

@Controller('/')
export class ProductController {
  constructor(public productsService: ProductsService) { }

  @Returns(200, ProductListEntity).Description('Success')
  @Get('/list') async list(
    @QueryParams('offset', Number) @Default(0) offset = 0,
    @QueryParams('limit', Number) @Default(5) limit = 5,
    @QueryParams('orderBy', String) @Default('stock') orderBy: string = 'stock',
    @QueryParams('orderDir', String) @Default('desc') orderDir: string = 'desc',
    @QueryParams('brand', String) brand?: string,
    @QueryParams('category', String) category?: string,
  ) {
    //validation
    const dir: OrderDir = (Object.values(OrderDir) as string[]).includes(orderDir) ? orderDir as OrderDir : OrderDir.DESC
    if (!allowedOrderBy.includes(orderBy)) orderBy = 'stock'

    const filter: FilterQuery<Product> = {}
    if (brand) filter.brandName = brand
    if (category) filter.category = category

    const products = await this.productsService.list(filter, { offset, limit, orderBy, orderDir: dir })
    return new ProductListEntity({ total: products.length, limit, offset, records: products })
  }
}
