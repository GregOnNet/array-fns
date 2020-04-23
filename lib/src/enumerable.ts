export interface EnumerableFunction<T, R> {
  (source: Enumerable<T>): Enumerable<R>
}

export class Enumerable<T> {
  constructor(private input: T[]) {}

  get values(): T[] {
    return this.input
  }

  pipe<A>(fn: EnumerableFunction<T, A>): Enumerable<A>
  pipe(...operations: EnumerableFunction<any, any>[]): Enumerable<any> {
    return operations.reduce(
      (prev: any, fn: any) => fn(prev),
      new Enumerable(this.input)
    )
  }
}
