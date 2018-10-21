const omit = require('../../modules/omit')

describe('omit', () => {
    test('returns a clone of the passed in object', () => {
        const obj = {name: 'tim'}
        const omitted = omit([], obj)
        
        expect(obj).not.toBe(omitted)
        expect(omitted).toEqual(obj)
    })

    test('returns a clone of the passed in object with the passed in keys omitted', () => {
        const obj = {
            name: 'Tim',
            age: 29,
            location: 'TN'
        }

        const omitKeys = ['location', 'age']
        const omitted = omit(omitKeys, obj)

        expect(omitted).toEqual({
            name: 'Tim'
        })
    })
})