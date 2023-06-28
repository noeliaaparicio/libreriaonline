function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.shadowColor="salmon";
    lienzo.shadowOffsetX=4;
    lienzo.shadowOffsetY=4;
    lienzo.shadowBlur=5;
    lienzo.font="bold 50px Comfortaa, sans-serif";
    
    lienzo.fillText("Audiolibros", 100,100);
    } window.addEventListener("load", iniciar, false);