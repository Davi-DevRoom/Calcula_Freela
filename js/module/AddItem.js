export default function initAddItem(){
        
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
    document.querySelector('#btn-add-1').addEventListener('click', () => {
        addItem(document.querySelector('#itemList-1'), document.querySelector('#result-1'));
    });

    document.querySelector('#btn-add-2').addEventListener('click', () => {
        addItem(document.querySelector('#itemList-2'), document.querySelector('#result-2'));
    });

    document.querySelector('#btn-add-3').addEventListener('click', () => {
        addItem(document.querySelector('#itemList-3'), document.querySelector('#result-3'));
    });
    
}