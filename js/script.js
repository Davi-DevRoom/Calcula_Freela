// const addItemButton = document.querySelector('#btn-add');
// const itemList = document.querySelector('#itemList');
// const totalResult = document.querySelector('#result');

// function addItem(){
//     const newItem = document.createElement('li');
//     newItem.setAttribute("class", "item");
//     newItem.innerHTML = `
//         <input type="text" class="name-item">
//         <span class="separator"></span>
//         <input type="number" name="" class="value-item" id="itemValue">
//         <input type="button" value="X" id="remove">
//     `;

//     itemList.appendChild(newItem);

//     const input = newItem.querySelector('#itemValue');
//     const removeButton = newItem.querySelector('#remove')

//     input.addEventListener('input', updateSum);
//     removeButton.addEventListener('click', ()=> removeItem(newItem, input));
// }

// function updateSum(){
//     totalSum = 0;

//     document.querySelectorAll('#itemValue').forEach(input => {
//         const value = Number(input.value);
//         if(!isNaN(value)){
//             totalSum += value;
//         }
//     });
//     totalResult.textContent = totalSum.toFixed(2);
// }

// function removeItem(item, input){
//     const value = parseFloat(input.value);
//     if(!isNaN(value)) totalSum -= value;

//     item.remove();

//     totalResult.textContent = totalSum.toFixed(2);
// }

// addItemButton.addEventListener('click', addItem);


function addItem(itemList, totalResult) {
    const newItem = document.createElement('li');
    newItem.setAttribute("class", "item");
    newItem.innerHTML = `
        <input type="text" class="name-item">
        <span class="separator"></span>
        <input type="number" class="value-item" id="itemValue">
        <input type="button" value="X" id="remove">
    `;

    itemList.appendChild(newItem);

    const input = newItem.querySelector('#itemValue');
    const removeButton = newItem.querySelector('#remove');

    input.addEventListener('input', () => updateSum(itemList, totalResult));
    removeButton.addEventListener('click', () => removeItem(newItem, input, itemList, totalResult));
}

function updateSum(itemList, totalResult) {
    let totalSum = 0;

    itemList.querySelectorAll('#itemValue').forEach(input => {
        const value = Number(input.value);
        if (!isNaN(value)) {
            totalSum += value;
        }
    });
    totalResult.textContent = totalSum.toFixed(2);
}

function removeItem(item, input, itemList, totalResult) {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        const totalSum = Array.from(itemList.querySelectorAll('#itemValue'))
            .reduce((sum, el) => sum + (Number(el.value) || 0), 0) - value;

        totalResult.textContent = totalSum.toFixed(2);
    }

    item.remove();
}

// Configurando os botões para usarem a função reutilizável
document.querySelector('#btn-add1').addEventListener('click', () => {
    addItem(document.querySelector('#itemList1'), document.querySelector('#result1'));
});

document.querySelector('#btn-add2').addEventListener('click', () => {
    addItem(document.querySelector('#itemList2'), document.querySelector('#result2'));
});

document.querySelector('#btn-add3').addEventListener('click', () => {
    addItem(document.querySelector('#itemList3'), document.querySelector('#result3'));
});