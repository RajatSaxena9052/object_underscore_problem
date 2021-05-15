function defaults(object, defaultProps) {
    if (typeof object == undefined || Array.isArray(object) == true || typeof object != 'object') {
        return {}
    } else {
        for (var property in defaultProps) {
            if (object[property] == undefined) {
                object[property] = defaultProps[property]
            }
        }
        return object
    }
}
module.exports = defaults;