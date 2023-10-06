import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { List } from 'src/app/services/http-request.util'
import { Product, ProductHTTPService, ProductListParam } from 'src/app/services/product-req.service'

@Component({ selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.less'] })
export class HomePage {
  offset = 0
  limit = 5
  param: Partial<ProductListParam> = {}
  data?: List<Product>

  productReqSub?: Subscription

  constructor(public productReq: ProductHTTPService) { }

  onFilterChange(data: Partial<ProductListParam>) {
    this.param = data
    this.offset = 0
    this.data = undefined
    this.onGetList(this.param)
  }

  onGetList(param: Partial<ProductListParam>) {
    this.productReqSub = this.productReq.get({ ...param, offset: this.offset, limit: this.limit } as ProductListParam)
      .subscribe(data => {
        if (this.data?.records) data.records = this.data.records.concat(data.records)
        this.data = data
      })
  }

  onLoadMore() {
    this.offset += this.limit
    this.onGetList(this.param)
  }
  destroy() {
    this.productReqSub?.unsubscribe()
  }

}
