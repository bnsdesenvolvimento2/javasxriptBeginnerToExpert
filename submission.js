/*Programa submission
Descrição:
Este programa valida um formulário submetido.
Autor: Nelson Seixas dos Santos
Data: 03/04/2020.
Versão: 0.0.1
*/

// Definição de funções
function validation(){
	if (document.form1.textbox1.value != ""){
		alert("Validation passed!");
		return true;
	}
	else{
		alert("Text box field cannot be empty.  Try again!");
		document.form1.action.value = "prog13.html"
		return false;
	}
}
