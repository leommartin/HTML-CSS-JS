
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(event) 
{
    event.preventDefault();
    
    if(!inputValue.value || inputValue.value < 0) 
    {
        alert('Informe um valor válido');
        return;
    }
    else if (!selectedCurrency.value) 
    {
        alert('Escolha uma moeda!');
        return;
    }

    convertCurrency();
};

function convertCurrency() 
{
    if(selectedCurrency.value === 'eur')
    {
        valueConverted = inputValue.value / 6.24;
        // result.innerHTML = 'R$ ' + valueConverted.toFixed(2);
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        animateResult();
    }
    else if(selectedCurrency.value === 'dol')
    {
        valueConverted = inputValue.value / 5.74;
        // result.innerHTML = 'R$ ' + valueConverted.toFixed(2);
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '' ;
};

function valueFormatter(Locale, currency)
{
    const value = valueConverted.toLocaleString(`${Locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`; 
};

function animateResult() {
    return result.animate([
        { transform: 'translateY(-100px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
    ], { duration: 500, iterations: 1});
};

