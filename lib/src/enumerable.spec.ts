import { Enumerable } from './enumerable'
import { map } from './map'

const enumerable = new Enumerable([1, 2, 3, 4])

const result = enumerable.pipe(map(number => `hi ${number}`))

console.log(result)
