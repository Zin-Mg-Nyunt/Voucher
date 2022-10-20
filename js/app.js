// selectors
let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");


// process
products.forEach((product)=>{
    let newOption = new Option(product.name, product.id);
    items.append(newOption);
})

inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(items.value , quantity.value);
    inputForm.reset();
})