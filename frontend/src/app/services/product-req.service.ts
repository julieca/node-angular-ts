import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { List } from './http-request.util'

const API_SEGMENT = 'product/list'

export type Product = {
  gtin: number
  name: string
  image: string
  brandName: string
  category: string
  color: string
  stock: number
  price: number
}

export type ProductListParam = {
  offset: number
  limit: number
  orderBy: string
  orderDir: string
  brand?: string,
  category?: string,
}


@Injectable({ providedIn: 'root' })
export class ProductHTTPService {

  constructor(public http: HttpClient) { }

  get({ offset = 0, limit = 5, orderBy = 'stock', orderDir = 'desc', ...filter }: ProductListParam) {

    const query = { offset: offset.toString(), limit: limit.toString(), orderBy, orderDir, ...filter }
    const params: URLSearchParams = new URLSearchParams(query)
    const queryStr = params.toString()
    const req = this.http.get<List<Product>>(`${environment.API_URL}/${API_SEGMENT}${queryStr}`)
    return req

  }
}
