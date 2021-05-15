function mapObjects(object, callBack) {
    if (typeof object == undefined || Array.isArray(object) == true || typeof object != 'object') {
        return {}
    } else {

        if (callBack != undefined) {
            for (var property in object) {
                object[property] = callBack(object[property], property)
            }
        }
        return object
    }
}
module.exports = mapObjects;