function throttle (func, interval) {
    let hasPassedInterval = true

    return (...args) => {
        if (hasPassedInterval) {
            hasPassedInterval = false
            func.apply(this, ...args)
            setTimeout(() => {
                hasPassedInterval = true
            }, interval)
        }
    }
}

module.exports = throttle