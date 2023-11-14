const convertButton = document.querySelector('.convert-button');
const sourceCurrencySelect = document.querySelector('.source-currency-select');
const targetCurrencySelect = document.querySelector('.target-currency-select');

async function convertCurrency() {
  const currencyInput = document.querySelector('.input-currency').value;
  const sourceValueDisplay = document.querySelector('.source-currency-amount');
  const targetValueDisplay = document.querySelector('.target-currency-amount');

  try {
    const data = await fetch(
      'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL/'
    ).then((res) => res.json());

    const usdToBrl = data.USDBRL.ask;
    const eurToBrl = data.EURBRL.ask;
    const btcToBrl = data.BTCBRL.ask;
    const gbpToBrl = data.GBPBRL.ask;

    switch (sourceCurrencySelect.value) {
      case 'real':
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(currencyInput);
        break;
    }

    switch (targetCurrencySelect.value) {
      case 'dolar':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput / usdToBrl);
        break;
      case 'euro':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput / eurToBrl);
        break;
      case 'bitcoin':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'XBT',
        }).format(currencyInput / btcToBrl);
        break;
      case 'libra':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput / gbpToBrl);
        break;
    }

    switch (`${sourceCurrencySelect.value}-${targetCurrencySelect.value}`) {
      case 'real-real':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((1 / 1) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(currencyInput);
        break;

      case 'dolar-real':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((usdToBrl / 1) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput);
        break;

      case 'dolar-euro':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format((usdToBrl / eurToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput);
        break;

      case 'dolar-dolar':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((usdToBrl / usdToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput);
        break;

      case 'dolar-bitcoin':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'XBT',
        }).format((usdToBrl / btcToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput);
        break;

      case 'dolar-libra':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format((usdToBrl / gbpToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(currencyInput);
        break;

      case 'euro-dolar':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((eurToBrl / usdToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput);
        break;

      case 'euro-euro':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format((eurToBrl / eurToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput);
        break;

      case 'euro-bitcoin':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'XBT',
        }).format((eurToBrl / btcToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput);
        break;

      case 'euro-libra':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format((eurToBrl / gbpToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput);
        break;

      case 'euro-real':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((eurToBrl / 1) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(currencyInput);
        break;

      case 'libra-dolar':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format((gbpToBrl / usdToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput);
        break;

      case 'libra-euro':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format((gbpToBrl / eurToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput);
        break;

      case 'libra-bitcoin':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'XBT',
        }).format((gbpToBrl / btcToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput);
        break;

      case 'libra-libra':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format((gbpToBrl / gbpToBrl) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput);
        break;

      case 'libra-real':
        targetValueDisplay.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((gbpToBrl / 1) * currencyInput);
        sourceValueDisplay.innerHTML = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
        }).format(currencyInput);
        break;
    }
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}

function changeSource() {
  const sourceCurrencyName = document.querySelector('.source-currency-name');
  const sourceCurrencyImage = document.querySelector('.source-currency-img');

  if (sourceCurrencySelect.value === 'real') {
    sourceCurrencyName.innerHTML = 'Real';
    sourceCurrencyImage.src = './assets/images/brazil-icon.png';
  } else if (sourceCurrencySelect.value === 'dolar') {
    sourceCurrencyName.innerHTML = 'Dólar americano';
    sourceCurrencyImage.src = './assets/images/usa-icon.png';
  } else if (sourceCurrencySelect.value === 'euro') {
    sourceCurrencyName.innerHTML = 'Euro';
    sourceCurrencyImage.src = './assets/images/euro-icon.png';
  } else if (sourceCurrencySelect.value === 'libra') {
    sourceCurrencyName.innerHTML = 'Libra';
    sourceCurrencyImage.src = './assets/images/libra-icon.png';
  }

  convertCurrency();
}

function changeTarget() {
  const targetCurrencyName = document.getElementById('currency-name');
  const targetCurrencyImage = document.querySelector('.target-currency-img');

  if (targetCurrencySelect.value === 'real') {
    targetCurrencyName.innerHTML = 'Real';
    targetCurrencyImage.src = './assets/images/brazil-icon.png';
  } else if (targetCurrencySelect.value === 'dolar') {
    targetCurrencyName.innerHTML = 'Dólar americano';
    targetCurrencyImage.src = './assets/images/usa-icon.png';
  } else if (targetCurrencySelect.value === 'euro') {
    targetCurrencyName.innerHTML = 'Euro';
    targetCurrencyImage.src = './assets/images/euro-icon.png';
  } else if (targetCurrencySelect.value === 'bitcoin') {
    targetCurrencyName.innerHTML = 'Bitcoin';
    targetCurrencyImage.src = './assets/images/bitcoin-icon.png';
  } else if (targetCurrencySelect.value === 'libra') {
    targetCurrencyName.innerHTML = 'Libra';
    targetCurrencyImage.src = './assets/images/libra-icon.png';
  }
  convertCurrency();
}

convertButton.addEventListener('click', convertCurrency);
sourceCurrencySelect.addEventListener('change', changeSource);
targetCurrencySelect.addEventListener('change', changeTarget);
