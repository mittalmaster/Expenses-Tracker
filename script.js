
function addInputValue()
{

   
    
    var table = document.querySelector(".list");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
   

   


  
    var item = document.getElementById("Item").value;
    //var itemNode = document.createTextNode(item);
    //td1.appendChild(itemNode);
    cell1.innerHTML = item;
    //var td2 = document.createAttribute("td");
    var date  = document.getElementById("date").value;
    //var dateNode = document.createTextNode(date);
   // td2.appendChild(dateNode);
   cell2.innerHTML = date;

    //var td3 = document.createAttribute("td");
    var amount = document.getElementById("amount").value;
    //var amountNode = document.createTextNode(amount);
    //td3.appendChild(amountNode);
    cell3.innerHTML = amount;
   
   
    
     cell4.innerHTML=" <button class = \"delbtn\"onclick=\"del(this);\">Cross</button>";



   
    document.getElementById("Item").value= "";
    document.getElementById("date").value="";
    document.getElementById("amount").value="";

    




}
function del(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
    
}
    