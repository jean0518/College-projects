//Función para implementar nuestra funcionalidad en el btn hamburger
export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;
    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
    
}
export function TamañoWindow(panelBtn, scrollBtn){
    let width = window.innerWidth;
    let height = window.innerWidth;
            if (width <=650 && height <= 650) {
                document.querySelector(panelBtn).classList.remove("Firstposition");
                document.querySelector(panelBtn).classList.add("Secondposition");
                document.querySelector(scrollBtn).classList.add("ScrollPosition");
            }else {
                document.querySelector(panelBtn).classList.remove("Secondposition");
                document.querySelector(panelBtn).classList.add("Firstposition");
                document.querySelector(scrollBtn).classList.remove("ScrollPosition");
            }
 };