function formatValueToCurrency(value){
    value = parseFloat(value);
    return value.toLocaleString('pt-br',
            {style: 'currency', 
            currency: 'BRL', 
            maximumFractionDigits: 2});
}

console.log(formatValueToCurrency(20));