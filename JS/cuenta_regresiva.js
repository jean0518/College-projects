const d = document;
export default function countdown (id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        //Se realizan los calculos de las fechas en milisegundos para obtener un mejor manero de los datos y fechas;
        let now = new Date().getTime();

        //Tiempo limite utilizado para hacer la resta entre la fecha que se tiene que llegar - el instante justo ahora. 
        let limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //Operación para determinar los dias faltantes para mi cumpleaños,
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000*60*60))).slice(-2),//Operación para determinar las horas faltantes para mi cumpleaños,
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;


        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
}