// selectors
let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");
let itemsList = document.querySelector("#itemsList");
let totalCost = document.querySelector("#totalCost");
let trash = document.querySelector("#trash");

// process
products.forEach((product)=>{
    let newOption = new Option(product.name, product.id);
    items.append(newOption);
})

// totalCost
function calcTotal() {
    let cost = document.querySelectorAll(".cost");
    let costs = [...cost].reduce((pv,cv)=>pv+Number(cv.innerText),0);
    totalCost.innerText = costs;
}

// delete product
function del() {
    event.target.parentNode.parentNode.parentNode.remove();
    calcTotal();
}

inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let currentItems = products.find(product=>product.id == items.value);
    let itemCost = currentItems.price * Number(quantity.value);

    let newTr = document.createElement("tr");
    newTr.innerHTML = `
        <td class="itemName">
        ${currentItems.name}
        <button class="btn btn-sm btn-danger" id="trash" onclick=del()>
            <i class="bi bi-trash-fill"></i>
        </button>
        </td>
        <td class="text-end">${currentItems.price}</td>
        <td class="text-end">${quantity.value}</td>
        <td class="text-end cost">${itemCost}</td>
    `;
    itemsList.append(newTr);
    calcTotal();
    
    
    inputForm.reset();
})