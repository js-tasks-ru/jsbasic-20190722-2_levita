/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
    var onlyNumbers = inputData.match(/-?[0-9]\d*(\.\d+)?/g);
    let answer = {
        'min': Math.min.apply(null, onlyNumbers),
        'max': Math.max.apply(null, onlyNumbers)

    };
    return answer
}
