//Se importa la función btn hamburger
import hamburgerMenu from "./menu_hamburguesa.js";
import {TamañoWindow} from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {moveAndCollision, keyboard } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import {opacityScroll} from "./scroll_up.js";
import {darkLightPage} from "./darkPage.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion__dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";
import { draw, agregarName, deleteNameList } from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formularios.js";
import translaterValue from "./translator.js";
const d = document;

//Función declarada para expresarla y utilizar el removeEvenListener (Movimiento y colisión)
function eventoTeclado(e) {
    moveAndCollision(e, ".ball", ".fondo");
}

//Barra del nav (Menu), Alarma && Reloj
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu("#hamburger", ".panel", ".menu a");
    digitalClock("#reloj", "#fecha" , ".iniciarReloj", ".finalizarReloj");
    alarm(".iniciarAlarma",".finAlarma");
    countdown("countdown", "may 18, 2025 00:00:00", "Feliz cumpleaños Jean,  deseo que tengas un buen dia y la pases excelente junto a las personas que amas y quieres.");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/IV0Cs5wlycY?si=bImmGizXWph97R06" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/IV0Cs5wlycY?si=Q4_lX5fqOLlvzBus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/ajUHHrXzojBEsghT9" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.740601712095!2d-74.78021828869377!3d10.982941689133588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4329dd520e3bd%3A0xa9db9350f7f30d04!2sPaseo%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1747167110424!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam", ".openCamara", ".closeCamara");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    agregarName(".players", "#btnAddPlayer", ".tarjeta");
    deleteNameList(".players", "#btnRemovePlayer", "#btnRemovePlayerAll");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    translaterValue();
});
darkLightPage(".darkBtn", ".iconoDarkLight", ".sun", "dark-mode", "dark-aside", "dark-nav");
//Posición del menu hamburger
window.addEventListener("resize", (e) => {
    TamañoWindow("#hamburger", ".arrowUp");
});
d.addEventListener("scroll", (e) => {
    opacityScroll(".arrowUp");
});
//Evento del teclado (Atajos)
d.addEventListener("keydown", (e) =>{
    keyboard(e);
});

//Evento del teclado (Movimiento y colision);
d.addEventListener("click", (e) => {
    if (e.target.matches(".fondo")) {
        d.addEventListener("keydown", eventoTeclado);
    }
    if (e.target.matches(".section")) {
        d.removeEventListener("keydown", eventoTeclado);
    }
});

networkStatus();











