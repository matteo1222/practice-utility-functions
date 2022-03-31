function cloneDeep (obj) {
    // recursive
    // return the value as is, if it is not an object
    if (typeof obj !== 'object') {
        return obj
    }
    const clonedObj = {}
    for (let key of Object.keys(obj)) {
        clonedObj[key] = cloneDeep(obj[key])
    }
    return clonedObj
}

let obj = {a: 1, b: {c: 1, d: 2}}
let cloned = cloneDeep(obj)
console.log(obj, cloned)
console.log(obj.a === cloned.a, obj.b === cloned.b)

module.exports = cloneDeep