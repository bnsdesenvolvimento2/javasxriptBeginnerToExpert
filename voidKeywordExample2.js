/*
Programa: voidKeywordExample2
Descrição: Este programa ensina o uso da palavra-chave void em javascript.
Autor: Nelson Seixas dos Santos.
Data: 04/04/2020.
Versão: 0.0.1
*/

// Definição de funções
function getVoidDemo() {
    var x, y, z;
    x = void(y = 50, z = 700);
    document.write('x = ' + x + 'y = ' + y + 'z = ' + z);
    
}
