const d = document,
    n = navigator;

export default function webCam(id, btnOpenCamara, btnCloseCamara) {
    const $video = d.getElementById(id);
    let stream;
    //console.log(n.mediaDevices.getUserMedia); Esta es la función que se va a ejecitar para detectar la camara desde el navegador.

    function activarCamara() {
        if (n.mediaDevices.getUserMedia) {
                n.mediaDevices.getUserMedia({video:true, audio:false})
                .then(mediaStream => {
                    stream = mediaStream;
                    //Manda a la camara un objeto, en este caso stream, para que se detecte se utiliza el metodo src.Object
                    $video.srcObject = stream;
                    $video.play();
                })
                .catch((err) => {
                    $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`); 
                    console.log(`¡Sucedió el siguiente error!: ${err}`);
                }); //Se ejecuta para devolver la función y si en caso ocurre algun error, se captura mediante un catch y lo manda a la consola;
            }; 
    }
    function detenerCamara() {
        if(stream){
            stream.getTracks().forEach(track => track.stop());
            $video.srcObject = null;
        }
    }

    
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnOpenCamara)) {
             activarCamara();
        }
        if (e.target.matches(btnCloseCamara)) { 
            detenerCamara();
        }
    });
}