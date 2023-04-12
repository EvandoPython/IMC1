function calc(){
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    
    imc = peso / (altura * altura);


    var texto ="";
    if(imc<18.5){
        texto="Vc esta magro"
       
    } else if(imc <24.5){
        texto="Vc eeta normal"
        
    } else if(imc <29.9){
        texto="Vc esta sobre peso"   
        
    }else if(imc <39.9){
        texto="Vc esta com obsidade"   
       

    }else {
        texto="Vc esta muito obeso"   
       
    }

    document.getElementById('texto-area').innerHTML = texto;
    document.getElementById('teste').innerHTML = imc;

}