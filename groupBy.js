function groupBy (arr, func) {
    const result = {}

    for (let el of arr) {
        let key = String(func.call(this, el))

        if (!result[key]) {
            result[key] = [el]
        } else {
            result[key].push(el)
        }
    }
    return result
}

module.exports = groupBy