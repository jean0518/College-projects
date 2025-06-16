const d = document;

//Se crea dos variables X y Y para determinar la posición 0 del objeto que se desea mover (En este caso el objeto ball)
let x = 0,
    y = 0;
export function moveAndCollision (e, ball, fondo){
    const $ball = d.querySelector(ball),
        $fondo = d.querySelector(fondo),
        limitBall = $ball.getBoundingClientRect(),
        limiteFondo = $fondo.getBoundingClientRect();

        /* console.log(limitBall, limiteFondo); */
        /* Se crea un switch para determinar la función del teclado en cada caso*/
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                if (limitBall.bottom < limiteFondo.bottom)y++;
                break;
            case "ArrowUp":
                e.preventDefault();
                if (limitBall.top > limiteFondo.top)y--;
                break;
            case "ArrowLeft":
                e.preventDefault();
                if (limitBall.left > limiteFondo.left)x--;
                break;
            case "ArrowRight":
                e.preventDefault();
                if (limitBall.right < limiteFondo.right)x++;
                break;
            default:
                break;    
    }
    //Se crea el traslate (Para traladar en X y en Y)
    $ball.style.transform = `translate(${x*15}px, ${y*15}px)`;
}

export function keyboard(e) {
    if (e.altKey && (e.key === "a" || e.key === "A")) {
        alert(`se lanzo una alerta con el teclado y lo origino alt + ${e.key}`);
    }
    if (e.altKey && (e.key === "p" || e.key === "P")) {
        prompt(`se lanzo un aviso con el teclado y lo origino alt + ${e.key}`);
    }
    if (e.altKey && (e.key === "c" || e.key === "C")) {
        confirm(`se lanzo un confirm con el teclado y lo origino alt + ${e.key}`);
    }
};