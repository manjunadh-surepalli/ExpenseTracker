
function deleterow(row){
  console.log("delete row function");
  row.remove();
}
function add(){
let date=document.getElementsByClassName("datecontrol")[0].value;
let amount=document.getElementsByClassName("amountinput")[0].value;
let transaction=document.getElementsByClassName("transactiontype")[0].value;

let row=document.createElement('tr');
let amountcell=document.createElement('td');
amountcell.innerText=amount;
let transactioncell=document.createElement('td');
transactioncell.innerText=transaction;
let datecell=document.createElement('td');
datecell.innerText=date;

let bincell=document.createElement('td');
let deletebutton=document.createElement('button');
let binimag=document.createElement('img');
binimag.src='https://www.shutterstock.com/image-vector/trash-delete-icon-isolated-on-260nw-1937456671.jpg';
binimag.style.width='25px';
binimag.style.height='25px';
deletebutton.appendChild(binimag);
deletebutton.classList.add('delete-button');
deletebutton.onclick=()=>deleterow(row);
bincell.appendChild(deletebutton);

row.appendChild(amountcell);
row.appendChild(transactioncell);
row.appendChild(datecell);
row.appendChild(bincell)
table.appendChild(row)

let income=document.getElementById('income').innerText;
let expense=document.getElementById('expense').innerText;
let balance=document.getElementById('balance').innerText;

if(transaction=="Income"){
    if(income=='0'){
        document.getElementById('income').innerText=amount;
    }
    else{
        document.getElementById('income').innerText=parseInt(income)+parseInt(amount);
    }

    if(income=='0'){
        document.getElementById('balance').innerText=amount;
    }
    else{
        document.getElementById('balance').innerText=parseInt(income)+parseInt(balance);
    }
}
else if(transaction=="Expense"){
    if(expense=='0'){
        document.getElementById('expense').innerText=amount;
    }
    else{
        document.getElementById('expense').innerText=parseInt(expense)+parseInt(amount);
    }

    if(expense=='0'){
        document.getElementById('balance').innerText=amount;
    }
    else{
        document.getElementById('balance').innerText=parseInt(balance)-parseInt(expense);
    }
}

}

