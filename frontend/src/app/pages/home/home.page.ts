import { Component } from '@angular/core'
import { List } from 'src/app/services/http-request.util'
import { Product, ProductHTTPService, ProductListParam } from 'src/app/services/product-req.service'

@Component({ selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.less'] })
export class HomePage {
  offset = 0
  limit = 5
  data?: List<Product>

  constructor(public productReq: ProductHTTPService) { }

  onFilterChange(data: Partial<ProductListParam>) {
    this.onGetList(data)
  }

  onGetList(param: Partial<ProductListParam>) {
    this.productReq.get({ ...param, offset: this.offset, limit: this.limit } as ProductListParam)
      .subscribe(data => {
        this.data = data
      })
  }

}
