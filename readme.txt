Estou desenvolvendo uma biblioteca de codigos que ainda se encontra em teste.
Pontos importantes na biblioteca: 

#Redução de codigos:

ANTES
document.getElementById(id).innerHTML = x;
DEPOIS
printId(id, x);

ANTES
document.getElementsByClassName(id)[key].setAttribute("style", estilo);
document.querySelector(#+id).setAttribute("style", estilo);
DEPOIS
trocarEstilo("[id key]", "estilo");
trocarEstilo("id", "estilo");

ANTES
document.getElementById(inputId).value;
DEPOIS
inputValor(inputId)

#geradores de objetos
cubeGenerator() //Gerador de cubos
