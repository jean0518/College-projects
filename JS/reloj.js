const d = document;

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;
    d.addEventListener("click", (e) => {
        /* Inicio = setInterval(() => {
            reloj(); Haci lo intente hacer Yo (Jean Soto)
        }, 1000); */
        
        //Ejemplo Curso
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3> La hora es: ${clockHour} </h3>`;
            }, 1000);
            e.stopPropagation();
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false; //Habilita el boton iniciar Hora (Reloj);
        }
        
    });
}
/* function reloj(fecha, hora){
    fecha = new Date();
    hora = fecha.toLocaleTimeString();
    document.getElementById("reloj").textContent = `La hora es: ${hora}`;
 }; */
 
export function alarm(btnStarAlarm, btnStopAlarm){
    const audio = new Audio("Sonido/alarma-good-morning-ringtones.mp3");
    d.addEventListener("click", (e) =>{
        if (e.target.matches(btnStarAlarm)) {
                audio.play();
        }
        if (e.target.matches(btnStopAlarm)) {
            audio.pause();
            audio.currentTime = 0;
        }
    })
    
    
/*      Forma Jean Soto
        $alarmaInicio = document.querySelector(".iniAlarma"),
        $alarmaFin = document.querySelector(".finAlarma");
    
        $alarmaInicio.addEventListener("click", (e) => {
            audio.play();
            $alarmaInicio.disabled = true;
        })
        $alarmaFin.addEventListener("click", (e) => {
            audio.pause()
            audio.currentTime = 0;
            $alarmaInicio.disabled = false;
        }) */
}