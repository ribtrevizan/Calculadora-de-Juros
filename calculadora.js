function calcular() {

    let capital = Number(document.getElementById("capital").value);

    let taxa = Number(document.getElementById("taxa").value) / 100;

    let tempo = Number(document.getElementById("tempo").value);

    let tipo_juros = document.getElementById("juros").value;

    let resultado;

    let final;

    if (tipo_juros == "simples") {

        // Juros Simples
         resultado = capital * taxa * tempo;
         final = capital - resultado

        document.getElementById("resposta").innerHTML = "O juros foi de R$:" + resultado   +   
       "<br><br>Juros Simples R$:" +  final;

    } 
    
    else {

        // Juros Compostos
        resultado = capital * ((1 + taxa) ** tempo) ;
        final = resultado - capital;

        document.getElementById("resposta").innerHTML = "O juros foi de R$:" + resultado  + "<br><br> Juros Compostos R$:" +  final;
         

    }

}

function limpar(){
    document.getElementById("resultado").innerHTML =" ";
    document.getElementById("final").innerHTML = " ";
    document.getElementById("capital").value = " ";
    document.getElementById("taxa").value = " ";
    document.getElementById("tempo").value = " ";
    document.getElementById("juros").value = " ";
}