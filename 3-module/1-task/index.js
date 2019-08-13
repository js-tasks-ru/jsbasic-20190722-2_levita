/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let old = data.filter(function (user) {
        return user.age <= age;
    });
    let result = old.map(function (user) {
        return user.name + ', ' + user.balance;
    });
    return result.join('\n');
}
