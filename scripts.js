const convertButton = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".currency-to-convert")
const currency = document.querySelector(".currency")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorConvertido = document.querySelector(".valor-convertido")
    const valorAConverter = document.querySelector(".valor-a-converter")


    console.log(currencyToConvert.value)

    const dollarToday = 4.98
    const euroToday = 5.33
    const libraToday = 6.21
    const realToday = 1

    
    
    // real para outras moedas

    if (currency.value == "real" && currencyToConvert.value == "dolar") {
        valorAConverter.innerHTML = "R$ " + inputCurrencyValue;
        let conversao = inputCurrencyValue / dollarToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(conversao);
    }


    if (currency.value == "real" && currencyToConvert.value == "euro") {
        valorAConverter.innerHTML = "R$ " + inputCurrencyValue;
        let conversao = inputCurrencyValue / euroToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(conversao);
    }


    if (currency.value == "real" && currencyToConvert.value == "libra") {
        valorAConverter.innerHTML = "R$ " + inputCurrencyValue;
        let conversao = inputCurrencyValue / libraToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("us-UK", {
            style: "currency",
            currency: "GBP",
        }).format(conversao);
    }






    // dollar para outras moedas

    if (
        currency.value == "dolar" &&
        currencyToConvert.value == "real"
    ) {
        valorAConverter.innerHTML = "US$ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * dollarToday) / realToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(conversao);
    }

    if (
        currency.value == "dolar" &&
        currencyToConvert.value == "libra"
    ) {
        valorAConverter.innerHTML = "US$ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * dollarToday) / libraToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("us-UK", {
            style: "currency",
            currency: "GBP",
        }).format(conversao);
    }

    if (
        currency.value == "dolar" &&
        currencyToConvert.value == "euro"
    ) {
        valorAConverter.innerHTML = "US$ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * dollarToday) / euroToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(conversao);
    }

    
    
    
    // Euro para outras moedas

    if (
        currency.value == "euro" &&
        currencyToConvert.value == "real"
    ) {
        valorAConverter.innerHTML = "€ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * euroToday) / realToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(conversao);
    }   

    if (
        currency.value == "euro" &&
        currencyToConvert.value == "dolar"
    ) {
        valorAConverter.innerHTML = "€ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * euroToday) / dollarToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(conversao);
    }

    if (
        currency.value == "euro" &&
        currencyToConvert.value == "libra"
    ) {
        valorAConverter.innerHTML = "€ " + inputCurrencyValue;
        let conversao = (inputCurrencyValue * euroToday) / libraToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("us-UK", {
            style: "currency",
            currency: "GBP",
        }).format(conversao);
    }


    // Libra para outras moedas

    if (
        currency.value == "libra" &&
        currencyToConvert.value == "real"
    ) {
        valorAConverter.innerHTML = "£" + inputCurrencyValue;
        let conversao = (inputCurrencyValue * libraToday) / realToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(conversao);
    }

    if (
        currency.value == "libra" &&
        currencyToConvert.value == "dolar"
    ) {
        valorAConverter.innerHTML = "£" + inputCurrencyValue;
        let conversao = (inputCurrencyValue * libraToday) / dollarToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(conversao);
    }

    if (
        currency.value == "libra" &&
        currencyToConvert.value == "euro"
    ) {
        valorAConverter.innerHTML = "£" + inputCurrencyValue;
        let conversao = (inputCurrencyValue * libraToday) / euroToday;

        valorConvertido.innerHTML = new Intl.NumberFormat("us-UK", {
            style: "currency",
            currency: "EUR",
        }).format(conversao);
    }
    

}
function changeCurrency() {
    const nomeMoeda = document.getElementById("nome-moeda")
    const currencyImage = document.querySelector(".currency-img")

    if (currencyToConvert.value == "dolar") {
        nomeMoeda.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/Dollar.png"
    }

    if (currencyToConvert.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencyToConvert.value == "libra") {
        nomeMoeda.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencyToConvert.value == "real") {
        nomeMoeda.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }

}


function changeCurrencyPrimary() {
    const currencyImgPrimary = document.querySelector(".currency-img-primary")
    const moedaPrimaria = document.getElementById("moeda-primaria")

    if (currency.value == "real") {
        moedaPrimaria.innerHTML = "Real Brasileiro"
        currencyImgPrimary.src = "./assets/Real.png"
    }

    if (currency.value == "dolar") {
        moedaPrimaria.innerHTML = "Dolar americano"
        currencyImgPrimary.src = "./assets/Dollar.png"
    }

    if (currency.value == "euro") {
        moedaPrimaria.innerHTML = "Euro"
        currencyImgPrimary.src = "./assets/Euro.png"
    }

    if (currency.value == "libra") {
        moedaPrimaria.innerHTML = "Libra Esterlina"
        currencyImgPrimary.src = "./assets/Libra.png"
    }

}

convertValues()
currency.addEventListener("change", convertValues)
currency.addEventListener("change", changeCurrencyPrimary)
currencyToConvert.addEventListener("change", changeCurrency)
currencyToConvert.addEventListener("change", convertValues)
convertButton.addEventListener("click", convertValues)