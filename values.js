function values(object) {
    if (typeof object == undefined || Array.isArray(object) == true || typeof object != 'object') {
        return []
    } else {
        let newArr = []
        for (let property in object) {
            //console.log(typeof object[property])
            if (typeof object[property] != "function") {
                if (typeof object[property] == "object") {
                    newArr.push(JSON.stringify(object[property]))
                } else {
                    newArr.push(object[property].toString())
                }
            }
        }
        return newArr
    }
}
module.exports = values;