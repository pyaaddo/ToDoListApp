let tdlinput = document.getElementById ("input");
let addBtn = document.getElementById ("addbtn");
let tdlist = document.getElementById ("ulist");

console.log(tdlinput);
console.log(addBtn);
console.log(tdlist);

function getInput() {

    // let inputRec = tdlinput.value;
    let recList = document.createElement ("li")
    recList.innerText = tdlinput.value; //inputRec
    tdlist.appendChild(recList);
}

addBtn.addEventListener ("click", getInput);

