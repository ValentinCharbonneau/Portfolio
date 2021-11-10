//////////////////////////////////////////
// Déclaration des variables,
// des boutons et des éléments de la page
//////////////////////////////////////////

    let width = screen.width;

    let burgerPre = document.getElementById("burgerPresentation");
    let burgerMenu = document.getElementById("burgerMenuCV");
    let btnPres = document.getElementById("btnPresentation");
    let btnExp = document.getElementById("btnExperiences");
    let btnForm = document.getElementById("btnFormations");
    let btnComp = document.getElementById("btnCompetences");

    let presentation = document.getElementById("presentationCV");
    let global = document.getElementById("global");
    let comp = document.getElementById("competences");
    let exp = document.getElementById("experiences");
    let formations = document.getElementById("formations");
    let mainMenu = document.getElementById("mainMenu");
    let retour = document.getElementById("btnReturnLinkCV");
    let framPres = document.getElementById("framPres");
    let divPres = document.getElementById("divPres");



//////////////////////////////////////////
// Gestion du menu pour afficher les différentes sections pour les écrans de moins de 768px de large
//////////////////////////////////////////

    burgerPre.addEventListener("click", function() {
        presentation.style.display = "none";
        comp.style.display = "none";
        exp.style.display = "none";
        formations.style.display = "none";
        mainMenu.style.display = "block";
        burgerPre.style.display = "none";
        retour.style.display = "none";
    })

    btnPres.addEventListener("click", function() {
        if (getComputedStyle(presentation).display == "none") {
            presentation.style.display = "block";
            comp.style.display = "none";
            exp.style.display = "none";
            formations.style.display = "none";
            mainMenu.style.display = "none";
            burgerPre.style.display = "block";
            retour.style.display = "block";
        }
    })

    btnExp.addEventListener("click", function() {
        if (getComputedStyle(exp).display == "none") {
            presentation.style.display = "none";
            comp.style.display = "none";
            exp.style.display = "block";
            exp.style.float = "left";
            formations.style.display = "none";
            mainMenu.style.display = "none";
            burgerPre.style.display = "block";
            retour.style.display = "block";
        }
    })

    btnForm.addEventListener("click", function() {
        if (getComputedStyle(formations).display == "none") {
            presentation.style.display = "none";
            comp.style.display = "none";
            exp.style.display = "none";
            formations.style.display = "block";
            formations.style.float = "left";
            mainMenu.style.display = "none";
            burgerPre.style.display = "block";
            retour.style.display = "block";
        }
    })

    btnComp.addEventListener("click", function() {
        if (getComputedStyle(comp).display == "none") {
            presentation.style.display = "none";
            comp.style.display = "block";
            comp.style.float = "left";
            exp.style.display = "none";
            formations.style.display = "none";
            mainMenu.style.display = "none";
            burgerPre.style.display = "block";
            retour.style.display = "block";
        }
    })



//////////////////////////////////////////
// Affichage de l'onglet présentation pour les écrans faisant entre 768px et 991px de large
//////////////////////////////////////////

    burgerMenu.addEventListener("click", function() {
        if (getComputedStyle(presentation).display == "none") {
            global.style.display = "none";
            comp.style.display = "none";
            presentation.style.display = "block";
            presentation.style.float = "left";
            framPres.style.float = "left";
            divPres.style.marginTop = "20px";
            presentation.style.marginLeft = "-270px"
            presentation.style.marginTop = "50px";
        } else {
            global.style.display = "block";
            comp.style.display = "block";
            presentation.style.display = "none";
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
        else if (screen.width <= 991 && width >= 992) {
            window.location.reload()
        } else if (screen.width >= 992 && width <= 991) {
            window.location.reload()
        }

        width = screen.width
    }