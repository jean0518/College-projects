const d = document;

export function opacityScroll (scrollBtn) {
    let scroll = window.scrollY;
    if (scroll > 300) {
        d.querySelector(scrollBtn).classList.add("Opacity1");
        d.querySelector(scrollBtn).disabled = false;
    }else{
        d.querySelector(scrollBtn).classList.remove("Opacity1");
        d.querySelector(scrollBtn).disabled = true;
    }
    d.addEventListener("click", (e) => {
        if (e.target.matches(`${scrollBtn} *`)) {
            //Se utiliza el scrollTo para que al presionar el boton arrowUp devuelva al ecabezado de la pagina
            window.scrollTo({
                top: 0
            });
        }
    });
}
