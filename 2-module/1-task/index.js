/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    return another =
        JSON.parse(JSON.stringify(obj));

}
