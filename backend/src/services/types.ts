import { OrderDir } from '../utils/pagination'

export type Pagination = {
  offset: number
  limit: number
  orderBy: string
  orderDir: OrderDir
}
