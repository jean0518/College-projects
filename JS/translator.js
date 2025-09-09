import { countries } from "./countries.js";
const d = document;

const fromText = d.querySelector(".areaEscritura"),
    toText = d.querySelector(".areaLectura"),
    exchageIcon = d.querySelector(".exchange"),
    selectTag = d.querySelectorAll("select"),
    iconsBtn = d.querySelectorAll(".selectArea i"),
    translateBtn = d.querySelector(".traslate");

export default function translaterValue() {
    selectTag.forEach((tag, id) => {
    for (let country_code in countries){
        let selected = id == 0 ? country_code == "es-ES" ? "selected" : "" : country_code == "en-GB" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
    });

    exchageIcon.addEventListener("click", (e) => {
        if (e.target) {
            let tempText = fromText.value,
                tempLang = selectTag[0].value;
                fromText.value = toText.value;
                toText.value = tempText;
                selectTag[0].value = selectTag[1].value;
                selectTag[1].value = tempLang;
        }
    });

    fromText.addEventListener("keyup", () => {
        if(!fromText.value){
            toText.value = "";
        }
    })

    translateBtn.addEventListener("click", () => {
        let areaEscritura = fromText.value.trim(),
            translateFrom = selectTag[0].value,
            translateTo = selectTag[1].value;
        
        if (!areaEscritura) return;
        toText.setAttribute("placeholder", "Traduciendo...");
        let apiUrl = `https://api.mymemory.translated.net/get?q=${areaEscritura}&langpair=${translateFrom}|${translateTo}`;
        fetch(apiUrl).then(res => res.json()).then(data => {
            toText.value = data.responseData.translatedText;
            data.matches.forEach(data => {
                if (data.id === 0) {
                    toText.value = data.translation;
                }
            });
            toText.setAttribute("placeholder", "Traducción");
        });

    });

    iconsBtn.forEach(el => {
    el.addEventListener("click", ({ target }) => {
        let utterance, lang, text,icon;
        if (!toText.value || !fromText.value) return;
        // Detecta si se presionó el botón "from" o "to"
        if (target.id === "from") {
            icon = document.getElementById("from");
            lang = selectTag[0].value;
            text = fromText.value;
        } else if (target.id === "to") {
            icon = document.getElementById("to");
            lang = selectTag[1].value;
            text = toText.value;
        } else {
            return;
        }

        // Si ya está hablando, cancelar y restaurar íconos
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            iconsBtn.forEach(btn => {
                btn.classList.remove("fa-stop");
                btn.classList.add("fa-volume-up");
            });
            return;
        }

        // Crear y configurar el texto a reproducir
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;

        // Cambiar ícono a "stop"
        icon.classList.remove("fa-volume-up");
        icon.classList.add("fa-stop");

        // Restaurar ícono al finalizar
        utterance.onend = () => {
            icon.classList.remove("fa-stop");
            icon.classList.add("fa-volume-up");
        };

        // Reproducir el texto
        speechSynthesis.speak(utterance);
    });
});

    /* iconsBtn.forEach(el => {
        el.addEventListener("click", ({target}) => {
            if (!toText.value || !fromText.value) return;
                let utterance;
                if (target.id == "from") {
                    utterance = new SpeechSynthesisUtterance(fromText.value);
                    utterance.lang = selectTag[0].value;
                }
                else{
                    utterance = new SpeechSynthesisUtterance(toText.value);
                    utterance.lang = selectTag[1].value;
                }
                speechSynthesis.speak(utterance);
        })
    });   */  

}