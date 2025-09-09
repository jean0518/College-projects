const d = document,
    w = window;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) { //Forma de detectar quien origina el evento
            e.preventDefault();
            //alert("Formulario enviado");            
            tester = w.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`); //Se utiliza el metodo del punto para especificar cual es la etiqueta input con la que interactua el usuario
        }
    });
    d.addEventListener("click", (e) => {
        if (e.target === $form.cerrar) {
            w.close(tester); //No funciona en varios navegadores
        }
    });
}