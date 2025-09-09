const d = document,
    ls = localStorage;

export function darkLightPage(botonDarkLight, icono, moonBtn, classDark, asideDark, darkNav){
    const $selector = d.querySelectorAll("[data-dark]");
    const $selectorAside = d.querySelectorAll("[data-dark-aside]");
    const $selectorNav = d.querySelectorAll("[data-dark-nav]");
    const $icono = d.querySelector(icono);
    const $moonbtn = d.querySelector(moonBtn);

    const lightMode = () =>{
        $icono.classList.add("bxs-sun");
        $icono.classList.remove("bxs-moon");
        $moonbtn.classList.remove("moon");
        $selector.forEach(el => el.classList.remove(classDark));//Sirve para cambiar la propiedad css y añadir el estilo data-mode en todos los selectores que tengan el elemento data-dark
        $selectorAside.forEach(el => el.classList.remove(asideDark));
        $selectorNav.forEach(el => el.classList.remove(darkNav));
        ls.setItem("theme", "light");
    };
    const darkMode = () =>{
        $icono.classList.remove("bxs-sun");
        $icono.classList.add("bxs-moon");
        $moonbtn.classList.add("moon");
        $selector.forEach(el => el.classList.add(classDark));//Sirve para cambiar la propiedad css y añadir el estilo data-mode en todos los selectores que tengan el elemento data-dark
        $selectorAside.forEach(el => el.classList.add(asideDark));
        $selectorNav.forEach(el => el.classList.add(darkNav));
        ls.setItem("theme", "dark");
    };

    d.addEventListener("click", (e) => {
        if(e.target.matches(`${botonDarkLight} *`)){
            if ($moonbtn.classList.contains("moon")) {
                lightMode();
            }else{
                darkMode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null){
            ls.setItem("theme", "light");
        }
        if (ls.getItem("theme") === "light"){
            lightMode();
        }
        if (ls.getItem("theme") === "dark"){
            darkMode();
        }
    })
}