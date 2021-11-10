//////////////////////////////////////////
// Déclaration des variables,
// des boutons et des éléments de la page
//////////////////////////////////////////

    let width = screen.width;

    let burger = document.getElementById("burgerPresentation");
    let presentation = document.getElementById("presentation");
    let main = document.getElementById("main");



//////////////////////////////////////////
// Gestion de l'affichage de l'onglet présentation
//////////////////////////////////////////

    burger.addEventListener("click", function() {
        if (getComputedStyle(presentation).display != "none") {
            presentation.style.display = "none";
            main.style.display = "block";
        } else {
            presentation.style.display = "block";
            presentation.style.float = "left";
            presentation.style.marginLeft = "-270px"
            presentation.style.marginTop = "50px";
            main.style.display = "none";
        }
    })



//////////////////////////////////////////
// Rechargement de la page en cas de changement de format, pour éviter la disparition de certain bloques
//////////////////////////////////////////

window.onresize = function() {
    if (screen.width <= 767 && width >= 768) {
        window.location.reload()
    } else if (screen.width >= 768 && width <= 767) {
        window.location.reload()
    }

    width = screen.width
}
