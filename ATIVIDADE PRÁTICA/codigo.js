
//esconde o botão sair
document.getElementById("botao3").style.display ='none';
var idade = 0;

function add(){
    idade+=1;
    document.getElementById("mostrarIdade").innerHTML = 'Sua idade é: ' + idade;

    //MOSTRAR O BOTÃO SALVAR E A CAIXA DE TEXTO
    document.getElementById("botao2").style.display ='inline-block';
    document.getElementById("nome").style.display ='inline-block';
        
}

function salvar(){
    
    //guarda o nome na VARIÁVEL
    var nome = document.getElementById("nome").value;

    //ATIVIDADE 1: guardar os valores (nome e idade) na MEMÓRIA DO NAVEGADOR


    //ESCONDER OS BOTÕES E MOSTRAR O BOTÃO SAIR
    document.getElementById("botao1").style.display ='none';
    document.getElementById("botao2").style.display ='none';
    document.getElementById("botao3").style.display ='inline-block';
}

function trocarPagina(){
    //ATIVIDADE 2: trocar de site 


}