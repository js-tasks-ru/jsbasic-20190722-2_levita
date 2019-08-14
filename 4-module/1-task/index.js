/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let li = friends.map((item)=> {
        // console.log(item);
        return  Object.values(item)[0] + ' ' + Object.values(item)[1];


    });

    var ul = document.createElement('ul');

    li.forEach(function(el) {
        let listitem = document.createElement("li");
        listitem.appendChild(document.createTextNode(el))
        ul.appendChild(listitem);

    })
       return  document.body.appendChild(ul);


}