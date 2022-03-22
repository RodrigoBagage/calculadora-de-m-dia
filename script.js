function calcular() {
  var nome =  document.getElementById("Nome").value;
  var nota1 = parseInt(document.getElementById("IUnidade").value);
  var nota2 = parseInt(document.getElementById("IIUnidade").value);
  var nota3 = parseInt(document.getElementById("IIIUnidade").value);
  var nota4 = parseInt(document.getElementById("IVUnidade").value);
   
  var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaFixada = notaFinal.toFixed(1);
    
    if (notaFinal >=7) {
      document.getElementById("teste").innerHTML = `Parabéns, ${nome} você foi aprovado! Sua média é: ${notaFixada}`   
    } else {
      document.getElementById("teste").innerHTML = `${nome}, você foi reprovado! Sua média é: ${notaFixada} `
    }
}
