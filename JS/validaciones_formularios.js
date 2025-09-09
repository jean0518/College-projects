const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
     $input = d.querySelectorAll(".contact-form [required]");
     /* console.log($input); */

     $input.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
     });

     d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

        if (pattern && $input.value !== "") {
            /* console.log("El input tiene patron"); */
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active")
        }
        if (!pattern) {
            /* console.log("El input no tiene patron"); */
            return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active")
        }
        }
     });

     d.addEventListener("submit", (e) => {
        //e.preventDefault();
        alert("Enviando Formulario");
        const $loader = d.querySelector(".contac-form-loader"),
            $responde = d.querySelector(".contact-form-response");
        /* let email =  $form.email.value;
        $form.action = `https://formsubmit.co/${email}`; */
        $loader.classList.remove("none");
        setTimeout(() => {
            $loader.classList.add("none");
            $responde.classList.remove("none");
            $form.reset();
            setTimeout(() => {
                $responde.classList.add("none");
            }, 2000);
        }, 3000);
     })
}