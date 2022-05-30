// Link do dojo
// https://dojopuzzles.com/problems/entre-letras/
//
const abc = 'abcdefghijklmnopqrsquvxz';

function calculaEspaco(){
    let letra1 = document.getElementById("letra1").value.toLowerCase();
    let letra2 = document.getElementById("letra2").value.toLowerCase();

    if ( abc.indexOf(letra1) == -1 || abc.indexOf(letra2) == -1 )
        return;
  
    let pos1 = abc.indexOf(letra1);
    let pos2 = abc.indexOf(letra2);
    
    if ( pos2 < pos1 )
      return;

    alert("O intervalo é de " + abc.substr(pos1, pos2).length + " letras.");
    
}
