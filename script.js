var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)



function addItem(){
    var input = document.getElementById('input');
    var item = input.nodeValue;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === ''){
        return false;
    }
    else {
        li = document.createElement('li');


        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');

        var label = document.createElement('label');
        label.setAttribute('for','item')

        //adding elements to the webpage

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 3);

        input.value = '';
}
}