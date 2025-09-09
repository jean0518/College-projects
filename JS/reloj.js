const d = document,
    $container = d.querySelectorAll(".containterReloj button");

export function digitalClock(clock, dayAll, btnPlay, btnStop){
    let clockTempo;
    const days = ["Domingo", "lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    d.addEventListener("click", (e) => {
        /* Inicio = setInterval(() => {
            reloj(); Haci lo intente hacer Yo (Jean Soto)
        }, 1000); */
        //Ejemplo Curso
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                const date = new Date();
                const amPm = date.toLocaleTimeString("en-US", { hour12: true}).split(" ")[1];
                const [hour, minutes, seconds, week, day, month, year] = [
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds(),
                    date.getDay(),
                    date.getDate(),
                    date.getMonth()+1,
                    date.getFullYear(),
                    ];
                d.querySelector(clock).innerHTML = `<h2> ${hour % 12 || 12}:${String(minutes).padStart(2, "0")}</h2><p>${amPm}<br>${String(seconds).padStart(2, "0")}</p>`;
                d.querySelector(dayAll).innerHTML = `<p> ${week}, Dia:${day} Mes:${month} año:${year}</p>`
            }, 0);
            e.stopPropagation();
            e.target.disabled = true;
            $container.forEach(button => {
                button.classList.add("active");
            });
        }
        if (e.target.matches(btnStop)){
            setTimeout(() => {
                clearInterval(clockTempo);
                d.querySelector(clock).innerHTML = null;
                d.querySelector(dayAll).innerHTML = null;
            }, 100);
            
            d.querySelector(btnPlay).disabled = false; //Habilita el boton iniciar Hora (Reloj);
            $container.forEach(button => {
                button.classList.remove("active");
            });
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