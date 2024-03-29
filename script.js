var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)



function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
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

// To remove items from the list we run a while loop inside a for loop. When clicking the 
// Remove todo button the function remove item loads and checks for the conddition we have set.

function removeItem(){
    li = ul.children
    for(let index = 0;index<li.length;index++){
        while( li[index]&& li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}
