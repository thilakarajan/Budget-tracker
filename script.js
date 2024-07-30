$(document).ready(function(){
    $('form').on('submit',(e)=>{
        e.preventDefault();
    })

})

function add(){
    var name = document.getElementById("name").value;
    var amount = document.getElementById('amount').value;
    var type = document.getElementById('type').value;
    var data = document.createElement('tr')
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td')
    cell1.innerHTML = type;
    cell2.innerHTML = name;
    cell3.innerHTML = `$${amount}`;
    cell4.innerHTML = '<a href="#" onclick="remove(this)">delete</a>'
    data.appendChild(cell1);
    data.appendChild(cell2);
    data.appendChild(cell3);
    data.appendChild(cell4);
    document.getElementsByTagName('table')[0].appendChild(data);
}

function remove(element){
    element.parentNode.parentNode.remove();
}