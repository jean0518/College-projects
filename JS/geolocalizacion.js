const d = document,
    n = navigator;

export default function getGeolocation(id) {
     const $id = d.getElementById(id),
     option = {
        enableHighAccuracy: true, //Al activar esta propiedad (true), se le esta diciendo al dispositivo que realice la mejor lectura posible (Depende de varios factores, el estado de red, etc)
        timeout: 5000,
        maximumAge: 0, //Para que no se guarde cache, es decir cada vez que realice las lecturas no tenga en cuenta la lectura realizada anteriormente
     };

     const success = position => {
        let coords = position.coords;
        /* console.log(position); */

        $id.innerHTML = `
        <p>Tu posición Actual es: </p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>`
     };
     const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
     };

     n.geolocation.getCurrentPosition(success, error, option);
}