document.getElementById("language-toggle").addEventListener("click", function () {
    // Obtener todos los elementos con atributo data-lang
    const esElements = document.querySelectorAll('[data-lang="es"]');
    const enElements = document.querySelectorAll('[data-lang="en"]');

    // Alternar la visibilidad de los elementos en español e inglés
    esElements.forEach(element => element.classList.toggle("hidden"));
    enElements.forEach(element => element.classList.toggle("hidden"));

    // Cambiar el texto del botón
    const button = document.getElementById("language-toggle");
    if (button.textContent === "Cambiar a Inglés") {
        button.textContent = "Switch to Spanish";
    } else {
        button.textContent = "Cambiar a Inglés";
    }
});