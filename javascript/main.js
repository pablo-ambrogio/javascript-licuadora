let estadoLicuadora = "apagada";
let licuadora = document.getElementById( 'blender' );
let sonidoEncendido = new Audio( '../sound/licuadora.mp3' );
let sonidoBoton = new Audio( '../sound/botonLicuadora.mp3' );

function controlarLicuadora() {
    if( estadoLicuadora == "apagada" ) {
        estadoLicuadora = "encendido";
        sonido();
        licuadora.classList.add('active');
        // console.log( 'Encendida' );
    }
    else {
        estadoLicuadora = "apagada";
        sonido();
        licuadora.classList.remove('active');
        // console.log( 'Apagada' );
    }
}

let sonido = () => {
    if( sonidoEncendido.paused ) {
        sonidoEncendido.play();
        sonidoBoton.play();
        sonidoEncendido.loop = true;
    } 
    else {
        sonidoBoton.play();
        sonidoEncendido.pause();
        sonidoEncendido.currentTime = 0;
    }
}