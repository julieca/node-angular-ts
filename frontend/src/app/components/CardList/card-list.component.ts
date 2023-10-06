import { Component, Input } from '@angular/core'
import { List } from 'src/app/services/http-request.util'
import { Product } from 'src/app/services/product-req.service'

const allowedCategory = ['shirt', 'jacket', 'pant']
const ASSET_URL = '/assets'

@Component({ selector: 'app-card-list', templateUrl: './card-list.component.html', styleUrls: ['./card-list.component.less'] })
export class CardListComponent {
  @Input() public data!: List<Product>

  imageSrc(src: string, category: string): string {
    if (src) {
      if (src.startsWith('http')) return src
      return `${ASSET_URL}/productImages/${src}`
    }
    if (allowedCategory.includes(category)) return `${ASSET_URL}/productImages/${category}`
    return `${ASSET_URL}/placeholder-image.jpg`
  }
  public onLoadMore() {
    console.log(999)
  }
}
