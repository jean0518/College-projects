const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    /* Crear una función expresada llamada isOnline */
    const isOnLine = () => {
        const $div = d.createElement("div");
        if (n.onLine) {
            $div.textContent = "Conexión Establecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
            setTimeout(() => {
                $div.classList.add("opacityConexion");
            }, 1000);
        }else{
            $div.textContent = "Conexión Perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");
            setTimeout(() => {
                $div.classList.add("opacityConexion");
            }, 1000);
        }
        $div.addEventListener("transitionend", (e) => {
            $div.remove();
        })
        d.body.insertAdjacentElement("beforebegin", $div);
        /* setTimeout(() => d.body.removeChild($div), 1000); */
    }

    /* Evento online y offline */
    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());
}