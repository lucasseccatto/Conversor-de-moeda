const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(res => res.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal)

    if (select.value === 'U$ Dólar americano') {
        currencyValueText.innerHTML = Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro)
    }

    if (select.value === '₿ Bitcoin') {
        currencyValueText.innerHTML = Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReal / bitcoin)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'U$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/estados-unidos.svg'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.svg'
    }

    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.svg'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)