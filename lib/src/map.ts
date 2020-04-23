import { Enumerable, EnumerableFunction } from './enumerable'

export function map<T, R>(project: (value: T) => R): EnumerableFunction<T, R> {
  return (enumerable: Enumerable<T>) =>
    new Enumerable(enumerable.values.map(project))
}
