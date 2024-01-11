const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-to-convert")
const currencySelectFirst = document.querySelector(".starting-currency")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorConvertido = document.querySelector(".valor-convertido")
    const valorAConverter = document.querySelector(".valor-a-converter")


    console.log(currencySelect.value)

    const dollarToday = 4.98
    const euroToday = 5.33
    const libraToday = 6.21
    const realToday = 1

    if (currencySelectFirst.value == "real") {
        valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)
    }

    if ( currencySelectFirst.value == "dolar") {
        valorAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"

        }).format(inputCurrencyValue * dollarToday)
    }

    if ( currencySelectFirst.value == "euro") {
        valorAConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR"

        }).format(inputCurrencyValue * euroToday)
    }

    if ( currencySelectFirst.value == "libra") {
        valorAConverter.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency:"GBP"

        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("us-UK", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)
    }

}

function changeCurrency() {
    const nomeMoeda = document.getElementById("nome-moeda")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        nomeMoeda.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/Dollar.png"
    }

    if (currencySelect.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        nomeMoeda.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "real") {
        nomeMoeda.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/Real.png"
    }

}


function changeCurrencyPrimary() {
    const currencyImgPrimary = document.querySelector(".currency-img-primary")
    const moedaPrimaria = document.getElementById("moeda-primaria")

    if (currencySelectFirst.value == "real") {
        moedaPrimaria.innerHTML = "Real Brasileiro"
        currencyImgPrimary.src = "./assets/Real.png"
    }

    if (currencySelectFirst.value == "dolar") {
        moedaPrimaria.innerHTML = "Dolar americano"
        currencyImgPrimary.src = "./assets/Dollar.png"
    }

    if (currencySelectFirst.value == "euro") {
        moedaPrimaria.innerHTML = "Euro"
        currencyImgPrimary.src = "./assets/Euro.png"
    }

    if (currencySelectFirst.value == "libra") {
        moedaPrimaria.innerHTML = "Libra Esterlina"
        currencyImgPrimary.src = "./assets/Libra.png"
    }

}

convertValues()
currencySelectFirst.addEventListener("change", convertValues)
currencySelectFirst.addEventListener("change", changeCurrencyPrimary)
currencySelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", convertValues)
convertButton.addEventListener("click", convertValues)