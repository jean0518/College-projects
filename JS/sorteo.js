const d = document;

export function agregarName(lista, btnAdd, input) {
    const $list = d.querySelector(lista),
     $inputText = d.querySelector(input);
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnAdd)) {
            e.preventDefault();
            const $li = d.createElement("li");
            $li.className = "player";
            $li.textContent = `${$inputText.value}`;
            $list.appendChild($li);
            $inputText.value = "";
        }
    })
}

export function deleteNameList(lista, btnRemove, btnRemoveAll) {
    /* lastChild = $player[$player.length-1]; */
    const $player = d.querySelector(lista);
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnRemove)) {
            $player.removeChild($player.lastElementChild);
            }
        if (e.target.matches(btnRemoveAll)) {
            $player.innerHTML = "";
        }
        })
}


export function draw(btn, selector) {
    const getWinner = (selector) => {
        const $player = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $player.length),
            winner = $player[random];            
            return `El ganador es ${winner.textContent}`
        };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
        }
    })
}
