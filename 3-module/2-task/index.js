/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    var onlyNumbers = str.match(/-?[0-9]\d*(\.\d+)?/g);
    let answer = {
        'min': Math.min.apply(null, onlyNumbers),
        'max': Math.max.apply(null, onlyNumbers)

    };
    return answer
}
