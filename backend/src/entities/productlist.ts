import { CollectionOf } from '@tsed/schema'
import { List, ListEntity } from './paginate'
import { ProductEntity } from './product'

type ListData<T> = List & {
  records: T
}

export class ProductListEntity extends ListEntity<ProductEntity> {
  @CollectionOf(ProductEntity) records!: ProductEntity[]

  constructor({ total, limit, offset, records }: ListData<ProductEntity[]>) {
    super({ total, limit, offset })
    this.records = records
  }
}
