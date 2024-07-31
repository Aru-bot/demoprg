var enterbutton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function createlistelement()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value= "";

    function crossout(){
        li.classList.toggle("done");
    }
  
 
    li.addEventListener("click", crossout);


  function deletelistitem(){

    li.classList.add("delete");
  }

  var dbtn = document.createElement("button");
  dbtn.appendChild(document.createTextNode("X"));
  li.appendChild(dbtn);
  dbtn.addEventListener("click", deletelistitem);

}

function inputlength(){
    return input.value.length;
}

function addlistafterclick(){
    if(inputlength()>0){
        createlistelement();
    }
}

function addlistafterkeypress(){

    if(inputlength()>0 && event.which === 13){
        createlistelement();
    }
}





enterbutton.addEventListener("click", addlistafterclick);

input.addEventListener("keypress", addlistafterkeypress);
