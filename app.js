var list= document.getElementById("list");

function addtodo(){

var a =  document.getElementById("tb");

// li create
var li = document.createElement('li')
var litext = document.createTextNode(a.value)
li.appendChild(litext)


// create edit button
var editbtn = document.createElement('button')
var edittext = document.createTextNode("EDIT")
editbtn.appendChild(edittext)
editbtn.setAttribute("class","edit")
editbtn.setAttribute("onclick","edit(this)")
li.appendChild(editbtn)



//delete button craete
var delbtn = document.createElement('button')
var delbtntext = document.createTextNode("DELETE")
delbtn.appendChild(delbtntext)
delbtn.setAttribute("class","delbtn")
delbtn.setAttribute("onclick","delete_item(this)")
li.appendChild(delbtn)





list.appendChild(li)
a.value = ""
} 

function deleteall(){
    list.innerHTML=""
}

function delete_item(e){
  e.parentNode.remove()
}

function edit(e){
    var val= e.parentNode.firstChild.nodeValue
    var editvalue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editvalue
}