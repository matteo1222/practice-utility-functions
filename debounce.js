function debounce (func, delay = 200) {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

module.exports = debounce