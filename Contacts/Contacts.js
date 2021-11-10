//////////////////////////////////////////
// Déclaration des variables,
// des boutons et des éléments de la page
//////////////////////////////////////////

    let imgPhone = document.getElementById("imgPhone");
    let imgMail = document.getElementById("imgMail");
    let imgLink = document.getElementById("imgLink");
    let txtMail = document.getElementById("txtMail");
    let divPhone = document.getElementById("divPhone");
    let divMail = document.getElementById("divMail");
    let divLink = document.getElementById("divLink");

    let margin = 0;



//////////////////////////////////////////
// Premier tour de boucle pour définir la mise en page des boutons
//////////////////////////////////////////

    if (divMail.clientWidth < 312) {
        txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin<br/>charbonneau<br/>@orange.fr</p>";
    } else if (divMail.clientWidth < 412) {
        txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin charbonneau<br/>@orange.fr</p>";
    } else if (divMail.clientWidth >= 412) {
        txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin charbonneau @orange.fr</p>";
    }

    if (divMail.clientWidth<228) {
        imgMail.style.float = "none";
        imgMail.style.marginTop = "5px";
        imgMail.style.marginBottom = "0px";
        imgMail.style.marginLeft = "0px";
        imgPhone.style.float = "none";
        imgPhone.style.marginTop = "5px";
        imgPhone.style.marginBottom = "0px";
        imgPhone.style.marginLeft = "0px";
        imgLink.style.float = "none";
        imgLink.style.marginTop = "5px";
        imgLink.style.marginBottom = "0px";
        imgLink.style.marginLeft = "0px";
        

    } else {
        imgMail.style.float = "left";
        imgMail.style.marginLeft = "-28px";
        imgPhone.style.float = "left";
        imgPhone.style.marginLeft = "-15px";
        imgLink.style.float = "left";
        imgLink.style.marginLeft = "-15px";

        imgMail.style.marginBottom = "0px";
        margin = (divMail.clientHeight-imgMail.clientHeight)/2;
        imgMail.style.marginTop = margin.toString() + "px";
        imgMail.style.marginBottom = margin.toString() + "px";

        imgPhone.style.marginBottom = "0px";
        margin = (divPhone.clientHeight-imgMail.clientHeight)/2;
        imgPhone.style.marginTop = margin.toString() + "px";
        imgPhone.style.marginBottom = margin.toString() + "px";

        imgLink.style.marginBottom = "0px";
        margin = (divLink.clientHeight-imgLink.clientHeight)/2;
        imgLink.style.marginTop = margin.toString() + "px";
        imgLink.style.marginBottom = margin.toString() + "px";
    }



//////////////////////////////////////////
// Modification de la mise en page de certains boutons en fonction de la taille de la fenêtre
//////////////////////////////////////////

    window.onresize = function() {
        if (divMail.clientWidth < 312) {
            txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin<br/>charbonneau<br/>@orange.fr</p>";
        } else if (divMail.clientWidth < 412) {
            txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin charbonneau<br/>@orange.fr</p>";
        } else if (divMail.clientWidth >= 412) {
            txtMail.innerHTML = "<p id='txtMail' Align=Center>Adresse électronique :<br/>valentin charbonneau @orange.fr</p>";
        }
    
        if (divMail.clientWidth<228) {
            imgMail.style.float = "none";
            imgMail.style.marginTop = "5px";
            imgMail.style.marginBottom = "0px";
            imgMail.style.marginLeft = "0px";
            imgPhone.style.float = "none";
            imgPhone.style.marginTop = "5px";
            imgPhone.style.marginBottom = "0px";
            imgPhone.style.marginLeft = "0px";
            imgLink.style.float = "none";
            imgLink.style.marginTop = "5px";
            imgLink.style.marginBottom = "0px";
            imgLink.style.marginLeft = "0px";
            
    
        } else {
            imgMail.style.float = "left";
            imgMail.style.marginLeft = "-28px";
            imgPhone.style.float = "left";
            imgPhone.style.marginLeft = "-15px";
            imgLink.style.float = "left";
            imgLink.style.marginLeft = "-15px";
    
            imgMail.style.marginBottom = "0px";
            margin = (divMail.clientHeight-imgMail.clientHeight)/2;
            imgMail.style.marginTop = margin.toString() + "px";
            imgMail.style.marginBottom = margin.toString() + "px";
    
            imgPhone.style.marginBottom = "0px";
            margin = (divPhone.clientHeight-imgMail.clientHeight)/2;
            imgPhone.style.marginTop = margin.toString() + "px";
            imgPhone.style.marginBottom = margin.toString() + "px";
    
            imgLink.style.marginBottom = "0px";
            margin = (divLink.clientHeight-imgLink.clientHeight)/2;
            imgLink.style.marginTop = margin.toString() + "px";
            imgLink.style.marginBottom = margin.toString() + "px";
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