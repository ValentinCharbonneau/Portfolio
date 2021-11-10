//////////////////////////////////////////
// Déclaration des variables,
// des boutons et des éléments de la page
//////////////////////////////////////////

    let divPython = document.getElementById("divPython");
    let mazeImg = document.getElementById("mazeImg");

    let coef = 0;
    let newWidth = 0;
    let newHeight = 0;



//////////////////////////////////////////
// Premier tour et redimenssionement de l'image en fonction de la taille de du block
//////////////////////////////////////////

    if (divPython.clientWidth < 570) {
        newWidth = divPython.clientWidth-20;
        coef = mazeImg.clientWidth/newWidth;
        newHeight = mazeImg.clientHeight/coef

        mazeImg.style.width = newWidth.toString() + "px";
        mazeImg.style.height = newHeight.toString() + "px";
    } else {
        mazeImg.style.width = "638px";
        mazeImg.style.height = "340px";
    }



//////////////////////////////////////////
// Vérification à chaque redimensionnement de la fenêtre,
// et redimenssionement de l'image en fonction de la taille de du block
//////////////////////////////////////////

    window.onresize = function() {
        if (divPython.clientWidth < 570) {
            newWidth = divPython.clientWidth-20;
            coef = mazeImg.clientWidth/newWidth;
            newHeight = mazeImg.clientHeight/coef

            mazeImg.style.width = newWidth.toString() + "px";
            mazeImg.style.height = newHeight.toString() + "px";
        } else {
            mazeImg.style.width = "638px";
            mazeImg.style.height = "340px";
        }
        

    //////////////////////////////////////////
    // Rechargement de la page en cas de changement de format, pour éviter la disparition de certain bloques
    //////////////////////////////////////////

        if (screen.width <= 767 && width >= 768) {
            window.location.reload()
        } else if (screen.width >= 768 && width <= 767) {
            window.location.reload()
        }

        width = screen.width
}