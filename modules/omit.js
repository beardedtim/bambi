import curry from './curry'

const omit = (keys, obj) => {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
        result[key] = value
    }

    keys.forEach(key => {
        delete result[key]
    })

    return result
}

export default curry(omit)