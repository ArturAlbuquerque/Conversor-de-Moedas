function ConversorDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorDeDolarParaReal = valorEmDolarNumerico * 5.22;
    var valorFinalDeDolarParaReal = valorDeDolarParaReal.toFixed(3);
    var elementoValorConvertidoDolar = document.getElementById("valorConvertido");
    var valorConvertidoDolar =
      "O valor em real é R$ " + valorFinalDeDolarParaReal;
    elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
  }
  function ConversorEuro() {
    var valorElementoEuro = document.getElementById("valor");
    var valorEuro = valorElementoEuro.value;
    var valorEmEuroNumerico = parseFloat(valorEuro);
    var valorDeEuroParaReal = valorEmEuroNumerico * 6.17;
    var valorFinalDeEuroParaReal = valorDeEuroParaReal.toFixed(3);
    var elementoValorConvertidoEuro = document.getElementById("valorConvertido");
    var ValorConvertidoEuro = "O valor em real é R$ " + valorFinalDeEuroParaReal;
    elementoValorConvertidoEuro.innerHTML = ValorConvertidoEuro;
  }
  function ConversorBitcoin() {
    var valorElementoBitcoin = document.getElementById("valor");
    var valorBitcoin = valorElementoBitcoin.value;
    var valorEmBitcoinNumerico = parseFloat(valorBitcoin);
    var valorDeBitcoinParaReal = valorEmBitcoinNumerico * 251.798;
    var valorFinalDeBitcoinParaRealParaReal = valorDeBitcoinParaReal.toFixed(3);
    var elementoValorConvertidoBitcoin = document.getElementById(
      "valorConvertido"
    );
    var ValorConvertidoBitcoin =
      "O valor em real é R$ " + valorFinalDeBitcoinParaRealParaReal;
    elementoValorConvertidoBitcoin.innerHTML = ValorConvertidoBitcoin;
  }
  