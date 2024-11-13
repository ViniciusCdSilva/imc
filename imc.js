const form = document.getElementById("form");

function calcularImc(){

    const weight =document.getElementById("weight").value;
    const height =document.getElementById("height").value;

    const imc = (weight /(height * height)).toFixed(2);

    document.querySelector("p").innerHTML = imc  + '' +classificacao(imc);   
}
function classificacao(imc){
    if(imc < 18.5)
        return'Magreza';
    if(imc >= 18.5 && imc <=24.5 )
        return'Normal';

    if( imc >=25 && imc <= 29.9 )
        return 'Sobrepeso I';

    if(imc >=30 && imc <= 39.9)
        return'Obesidade II';
    if( imc >= 40)
        return'Obeesidade grave';        
}