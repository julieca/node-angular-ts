import { Description, Example, Property, Required, Schema } from '@tsed/schema'
import { Product } from '../model/product'


@Schema({ title: 'Product' })
export class ProductEntity extends Product {
    @Required()
    @Description('Unique ID')
    @Example(1)
    gtin: number

    @Required()
    @Description('Name')
    @Example('Julieca')
    name: string

    @Property()
    @Description('Image')
    @Example('product1.png')
    image: string

    @Required()
    @Description('brand')
    @Example('Aurora')
    brandName: string

    @Required()
    @Description('Category')
    @Example('shirt')
    category: string

    @Required()
    @Description('Color')
    @Example('blue')
    color: string

    @Required()
    @Description('stock')
    @Example(1)
    stock: number

    @Required()
    @Description('Price')
    @Example(40)
    price: number
}
