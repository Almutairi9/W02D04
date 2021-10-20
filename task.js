// console.log("to do list"); 

const body = document.querySelector("body")
const h1 = document.createElement("h1")
const ul = document.createElement("ul")
const button = document.createElement("button")
let input = document.createElement("input")
 
h1.innerHTML ="Todo List";
input.type = "text";
button.innerHTML = "Add Item"; 
ul.id = "ul";
button.id ="b1"; 
input.id = "input";  
body.append(h1)
body.append(ul) 
body.append(button) 
body.append(input) 

const toDos =["wake up ", "eat breakfast ", "code"]; //array 
/////////
const deleteListItem = (index)=>{
    toDos.splice(index,1)
    renderList()
}

// const updateListItem = (event) => {
//        let value = prompt ("Enter The item ");
//        toDos[event.currentTarget.index]= value;
//        console.log(event.toDos);
//        renderList();
//  };

/////////
const renderList = () => 
{
    const unorderlist = document.querySelector("#ul"); 
    unorderlist.innerHTML="" 
   for (let index = 0 ; index < toDos.length; index++ )
   {
       const item = document.createElement("li")
       item.innerHTML=toDos[index]
       ul.append(item);
       const deleteBTN =document.createElement("button")
       deleteBTN.innerHTML="delete this task"
       unorderlist.append(deleteBTN)
       deleteBTN.addEventListener("click",() => 
       {
           deleteListItem(index) })
        const updateBTN =document.createElement("button")
        updateBTN.innerHTML="update this task"
        unorderlist.append(updateBTN)
        updateBTN.addEventListener("click", () => 
        {
            // updateListItem (index)
            
        });
   }   
 } 
renderList(); 
  
button.addEventListener("click", addToList = () => {
   if (input.value.length)
   {
       toDos.push(input.value);
       renderList(input);
   } 
  });   


    
  



 