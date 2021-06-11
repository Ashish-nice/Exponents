var tableDiv= document.getElementById("table");
var buttonSubmit= document.getElementById("buttonSubmit");
var textbox= document.getElementById("number");
var theTable= document.querySelector("table");

function findExponent(a, b){
  //a**b (or what we write as a^b)
  var returnNum= 1;
  // -2^3= 1*-2*-2*-2

  //2^3
  for(let i=1; i<=b; i++)
  {
    returnNum*=a;
  }
  return returnNum;
}
displayTable=(textbox, theTable)=> {
    if(textbox.value!=""){
    theTable.innerHTML=
    `
    <tr>
          <th>Power</th>
          <th> Value </th>
    </tr>    
    `                                     
    for(let i=1; i<=10; i++)
    {theTable.innerHTML+=
      `
      <tr>
      <td> ${i} </td>
      <td> ${findExponent(textbox.value, i)} </td>
      </tr>
      `
    }
  }
}
buttonSubmit.addEventListener("click",()=>{
  displayTable(textbox, theTable);
});

textbox.addEventListener("keyup", (e)=>{
  if (e.keyCode==13){
    displayTable(textbox, theTable);

}
});



var clearButton= document.getElementById("clear");
clearButton.addEventListener("click", () =>{
theTable.innerHTML="";

/*Textbox is not causing the problem*/
textbox.value= null;
});


switch(value){
  case x: 
  break;

  case y: 
  break;
  
}

