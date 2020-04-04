/* Programa OnSubmitEvents
Descrição: Este programa apresenta uso de caixas de diálog.
Autor: Nelson Seixas dos Santos
Data: 04/04/2020.
Versão: 0.0.1
*/

// Definição de funções
function validation(){
    if (document.form1.textbox1.value != ""){
        alert("Validation passed!");
        return false;
    }
    else{
        alert("Text Box field cannot be empty.");
        return false;
    }
}