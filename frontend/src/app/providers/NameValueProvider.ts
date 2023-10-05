import { ModelProvider } from './ModelProvider'

export interface NameValueRecord<V = string | number> {
  title: string
  value: V
}

export class NameValueProvider<V extends string | number> implements ModelProvider<NameValueRecord<V>> {
  records: NameValueRecord<V>[] = []
  constructor(records: NameValueRecord<V>[]) {
    this.records = records
  }

  getValue({ value }: NameValueRecord<V>) { return value }
  getTitle({ title }: NameValueRecord<V>) { return title }
}
