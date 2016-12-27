function calcular(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var resultado=document.getElementById("resultado");   
  
    var suma = parseInt(a)+ parseInt(b);

    resultado.value=suma;
    var salida = document.getElementById("salida");
    
    if(a == 10 || b == 10 || suma==10 ){
        salida.innerHTML = "1";
    }
        
    else{
        salida.innerHTML = "0";
    }
}