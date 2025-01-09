const BTN_ADD = document.querySelector('#btn-add');

BTN_ADD.addEventListener("click", add_li)

function add_li(){
    const UL_PERSONAL_EXPENSE = document.querySelector('ul');

    const li = document.createElement('li');
    li.innerHTML += `<li class="item">
                        <input type="text">
                        <input type="number" name="" id="spending-amount">
                        <input type="button" value="X">
                    </li>`;

    UL_PERSONAL_EXPENSE.appendChild(li);

}

let valor_gasto = document.querySelectorAll('#spending-amount');
const RESULT = document.querySelector('#result');

    function Soma() {
        let soma = 0;

        // Iterar sobre os inputs para somar os valores
        valor_gasto.forEach(input => {
            const valorItem = parseFloat(input.value);

            if (!isNaN(valorItem)) {
                soma += valorItem;
            }
        });

        // Atualizar o campo de soma com o resultado
        RESULT.textContent += soma.toFixed(2);
    }

valor_gasto.forEach(input => {
    input.addEventListener('blur', Soma);
});