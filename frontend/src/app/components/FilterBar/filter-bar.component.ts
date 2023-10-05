import { Component } from '@angular/core'
import { NameValueProvider } from 'src/app/providers/NameValueProvider'

@Component({ selector: 'app-filter-bar', templateUrl: './filter-bar.component.html', styleUrls: ['./filter-bar.component.less'] })
export class FilterBarComponent {
  public categoryProvider = new NameValueProvider<string>([
    { title: 'Shirt', value: 'shirt' },
    { title: 'Tshirt', value: 't-shirt' },
    { title: 'Jacket', value: 'jacket' },
    { title: 'Pants', value: 'pants' },
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

  public onSortClick() {
    this.sortAsc = !this.sortAsc
  }

  public onSubmit() {
    console.log(this.selectedSortBy, this.sortAsc)
  }
}
