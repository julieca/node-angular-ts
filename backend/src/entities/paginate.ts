import { Description, Example, Property, Schema } from '@tsed/schema'
export type List = {
  total: number
  limit: number
  offset: number
}

@Schema({ title: 'ListEntity' })
export abstract class ListEntity<T> {
  @Property()
  @Description('Total')
  @Example(1000)
  total!: number

  @Property()
  @Description('Limit')
  @Example(100)
  limit!: number

  @Property()
  @Description('Offset')
  @Example(0)
  offset!: number

  abstract records: T[]

  constructor(data: List) {
    this.limit = data.limit
    this.total = data.total
    this.offset = data.offset
  }
}
