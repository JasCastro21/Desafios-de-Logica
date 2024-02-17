function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantida de indisponivel para o tipo pista');
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantida de indisponivel para o tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let comprarInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > comprarInferior){
        alert('Quantida de indisponivel para o tipo inferior');
    } else {
        comprarInferior = comprarInferior - qtd
        document.getElementById('qtd-inferior').textContent = comprarInferior
        alert('Compra realizada com sucesso');
    }
}