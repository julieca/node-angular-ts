import { Model } from "@tsed/mongoose"
import { Property, Required } from "@tsed/schema"

@Model()
export class Product {
  @Required()
  gtin: number

  @Required()
  name: string

  @Property()
  image: string

  @Required()
  brandName: string

  @Required()
  category: string

  @Required()
  color: string

  @Required()
  stock: number

  @Required()
  price: number
}
