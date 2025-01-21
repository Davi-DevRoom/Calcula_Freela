export default function initSelect(){
    const calcular = document.querySelector('#Calc');

    function addVariable(){
        let result_box_1 = document.querySelector('#result-1');
        let result_box_2 = document.querySelector('#result-2');
        let result_box_3 = document.querySelector('#result-3');
        let num_box_1 = Number(result_box_1.textContent);
        let num_box_2 = Number(result_box_2.textContent);
        let num_box_3 = Number(result_box_3.textContent);
    
        const profit = Number(document.querySelector('#profit-button').value);
        const hours = Number(document.querySelector('#hours-button').value);
        const days = Number(document.querySelector('#days-button').value);
        const headerTotalResult = document.querySelector('#totalTemp');
    
        const totalExpenses = num_box_1 + num_box_2 + num_box_3;
    
        const totalProfit = totalExpenses * profit / 100;
    
        const valueTotal = totalExpenses + totalProfit;
        const temp = hours * days;
        const valorTotalTemp = valueTotal / temp;
    
        headerTotalResult.textContent = valorTotalTemp.toFixed(2);
        
    }
    
    calcular.addEventListener('click', addVariable)
}