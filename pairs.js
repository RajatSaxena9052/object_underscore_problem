function pairs(object) {
    if (typeof object == undefined || typeof object != 'object') {
        return []
    } else {
        return Object.entries(object)
    }
}
module.exports = pairs