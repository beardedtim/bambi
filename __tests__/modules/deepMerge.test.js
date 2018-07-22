import deepMerge from '../../modules/deepMerge'

describe('deepMerge', () => {
    test('returns merged values if all primitives', () => {
        const a = { a: 1 }
        const b = { b: 2 }
        const merged = deepMerge(a, b)

        expect(merged).toEqual({
            a: 1,
            b: 2
        })
    })

    test('overrides a\'s values with b\'s if both primatives', () => {
        const a = { a: 1 }
        const b = { a: 2, b: 2 }
        const merged = deepMerge(a, b)

        expect(merged).toEqual({ a: 2, b: 2})
    })

    test('returns nested objects merged', () => {
        const a = { data: { first: 't' } }
        const b = { data: { last: 'r' } }
        const merged = deepMerge(a, b)

        expect(merged).toEqual({ data: { first: 't', last: 'r' } })
    })

    test('returns merged arrays by zipping and flattening', () => {
        const a = { data: [1] }
        const b = { data: [2] }
        const merged = deepMerge(a, b)

        expect(merged).toEqual({ data: [1, 2] })
    })
})