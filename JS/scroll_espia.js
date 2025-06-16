const d = document;

/* Esta función se utiliza para detectar todos los elementos que tengan el atributo "section[data-scroll-spy]", y al detectarlo interactua e imprime las interacciones realizadas con este atributo y todos los elementos que lo posean */
export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
        /* console.log("Entries", entries); */

        entries.forEach(entry => {
            /* console.log("Entry", entry); */
            const id = entry.target.getAttribute("id");
            /* console.log(id); */
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-420px"
        threshold: [0.5, 0.75],
    });
    /* console.log("Observer", observer) */

    $sections.forEach(el => observer.observe(el));
}