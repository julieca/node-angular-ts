import { Model, MongooseIndex, MongooseIndexes } from "@tsed/mongoose"
import { Property, Required } from "@tsed/schema"

@Model()
@MongooseIndexes([
  {fields: {stock: 1}}, 
  {fields: {price: 1}},
  {fields: {brandName: 1, stock: 1}}, 
  {fields: {brandName: 1, price: 1}}, 
  {fields: {category: 1, stock: 1}}, 
  {fields: {category: 1, price: 1}}, 
  {fields: {brandName: 1, category: 1, stock: 1}}, 
  {fields: {brandName: 1, category: 1, price: 1}}
])

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
