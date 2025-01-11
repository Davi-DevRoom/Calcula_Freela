const addItemButton = document.querySelector('#btn-add');
const itemList = document.querySelector('#itemList');
const totalResult = document.querySelector('#result');

function addItem(){
    const newItem = document.createElement('li');
    newItem.setAttribute("class", "item");
    newItem.innerHTML = `
        <input type="text" class="name-item">
        <span class="separator"></span>
        <input type="number" name="" class="value-item" id="itemValue">
        <input type="button" value="X" id="remove">
    `;

    itemList.appendChild(newItem);

    const input = newItem.querySelector('#itemValue');
    const removeButton = newItem.querySelector('#remove')

    input.addEventListener('input', updateSum);
    removeButton.addEventListener('click', ()=> removeItem(newItem, input));
}

function updateSum(){
    const S1 = document.querySelector('#s1');

    totalSum = 0;

    document.querySelectorAll('#itemValue').forEach(input => {
        const value = Number(input.value);
        if(!isNaN(value)){
            totalSum += value + S1;
        }
    });
    totalResult.textContent = totalSum.toFixed(2);
}

function removeItem(item, input){
    const value = parseFloat(input.value);
    if(!isNaN(value)) totalSum -= value;

    item.remove();

    totalResult.textContent = totalSum.toFixed(2);
}

addItemButton.addEventListener('click', addItem);
