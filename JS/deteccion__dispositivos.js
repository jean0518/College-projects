const d = document,
    n = navigator,
    ua = n.userAgent;

/* Con esta función se puede detectar el navegador, el servidor, y el dispositivo desde el cual el usuario ingresa a nuestra pagina web */
export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    //Se evalua que el userAgent sea del sistema correspondiente, ejemplo, mobil, sistema operativo, etc.
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function(){
                return this.android() || this.ios() || this.windows();
            },
        },
        isDesktop = {
            linux: ()  => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function(){
                return this.linux() || this.mac() || this.windows();
            },
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return(
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            },
        };
    /* console.log(ua);
    console.log(isMobile.android());
    console.log(isMobile.ios()); */
    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>`;

    /* Contenido Exclusivo */
    if (isBrowser.chrome()) {
        $id.innerHTML += `<P><mark> Este contenido solo se ve en Chrome</mark></p>`;
    };
    if (isBrowser.edge()) {
        $id.innerHTML += `<P><mark> Este contenido solo se ve en edge</mark></p>`;
    };
    if (isDesktop.windows()) {
        $id.innerHTML += `<P><mark> Descarga nuestro software para Windows</mark></p>`;
    };

    /* Redirecciones */
    /* if (isMobile.android()) {
        window.location.href = "https://jonmircha.com"
    } */
}