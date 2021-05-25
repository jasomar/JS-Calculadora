let operadojs;
let inpResultado = document.getElementById('inpResultado');

function validarOperacion(operacion){
   
    operadojs = operacion;
}

function resultado(){
    let num1 = Number(document.getElementById('inpNumero1').value);
    let num2  = Number(document.getElementById('inpNumero2').value);

    if(num1 === 0 && num2 === 0){
        alert('Favor ingrese minimo un número');
    }else{
        switch (operadojs) {
            case 'suma':
               var resultado = (num1 + num2);
               inpResultado.value= resultado;
            break;
            case 'resta':
               var resultado = (num1 - num2);
               inpResultado.value= resultado;
            break;
            case 'division':
               var resultado = (num1 / num2);
               inpResultado.value= resultado;
            break;
            case 'multiplicar':
               var resultado = (num1 * num2);
               inpResultado.value= resultado;
            break;
        }
    }
}

function limpiar() {
    document.getElementById('inpNumero1').value = '';
    document.getElementById('inpNumero2').value = '';
    inpResultado.value= '';
}