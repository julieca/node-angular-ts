
export interface ModelProvider<T, V = string | number> {
  getValue?(record: T): V
  getTitle?(record: T): string
}
