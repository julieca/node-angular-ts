import { Component, EventEmitter, Output } from '@angular/core'
import { NameValueProvider } from 'src/app/providers/NameValueProvider'
import { OrderDir } from 'src/app/services/http-request.util'
import { ProductListParam } from 'src/app/services/product-req.service'

@Component({ selector: 'app-filter-bar', templateUrl: './filter-bar.component.html', styleUrls: ['./filter-bar.component.less'] })
export class FilterBarComponent {
  public categoryProvider = new NameValueProvider<string>([
    { title: 'Shirt', value: 'shirt' },
    { title: 'Tshirt', value: 't-shirt' },
    { title: 'Jacket', value: 'jacket' },
    { title: 'Pants', value: 'pant' },
  ])
  public brandProvider = new NameValueProvider<string>([
    { title: 'Aurora', value: 'aurora' },
    { title: 'Nova', value: 'nova' }
  ])
  public sortProvider = new NameValueProvider<string>([
    { title: 'Price', value: 'price' },
    { title: 'Stock', value: 'stock' }
  ])

  public selectedBrand?: string
  public selectedCategory?: string
  public selectedSortBy: string = 'stock'
  public sortAsc: boolean = false

  @Output() submitFilter = new EventEmitter<Partial<ProductListParam>>()


  public onSortClick() {
    this.sortAsc = !this.sortAsc
  }

  public onSubmit() {
    const param: Partial<ProductListParam> = {
      orderBy: this.selectedSortBy,
      orderDir: this.sortAsc ? OrderDir.ASC : OrderDir.DESC
    }
    if (this.selectedBrand) param.brand = this.selectedBrand
    if (this.selectedCategory) param.category = this.selectedCategory

    this.submitFilter.emit(param)
  }
}
