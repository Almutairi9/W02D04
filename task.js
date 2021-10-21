 
// Style from bootstrap ...!! 


document.querySelector(".container").className = "row mx-md-n5 ";
document.querySelector(".Div1").className = 
"row justify-content-md-center col px-md-5  "; 

const body = document.querySelector(".Div2");
body.className = "col col-lg-6  p-3 border bg-light mt-5 "; 
// for header ..!!
const h1 = document.createElement("h1")
h1.className = "text-center";
h1.innerHTML ="Todo List";
body.append(h1)
//
const ul = document.createElement("ul")
ul.id = "ul";
body.append(ul)
//
const button = document.createElement("button")
button.innerHTML = "Add Item"; 
button.id ="b1"; 
body.append(button)
//
let input = document.createElement("input")
input.type = "text";
input.id = "input";
body.append(input)
//
const toDos =["wake up ", "eat breakfast ", "code"]; //array 

 
button.addEventListener("click", addToList = () => {
    if (input.value.length)
    {
        toDos.push(input.value);
        renderList(input);
    } 
   }); 

const deleteListItem = (index)=>{
    toDos.splice(index,1)
    renderList() 
}

const updateListItem = (event) => {
    let index = event.target.id;
    let mesage = prompt(" Update your task ! ");
    toDos[index] = mesage;
    renderList();
  }; 

const renderList = () => 
{
    const unorderlist = document.querySelector("#ul"); 
    unorderlist.innerHTML="" 

   for (let index = 0 ; index < toDos.length; index++ )
   {
       const item = document.createElement("li")
       item.innerHTML=toDos[index]
       ul.append(item);
       item.className = "mt-2 p-2 border bg-light ";
       const deleteBTN =document.createElement("button")
       deleteBTN.innerHTML="delete this task"
       unorderlist.append(deleteBTN)
       deleteBTN.addEventListener("click",() => 
       {
           deleteListItem(index) }
        )
        const updateBTN =document.createElement("button")
        updateBTN.innerHTML="update this task"
        unorderlist.append(updateBTN)
        updateBTN.addEventListener("click" , updateListItem );
        updateBTN.id = index; 
         
   }   
 };  
renderList(); 
 

   
 
  


    
  



 