
let billettObjekter = [];
function slettTabell(){
    $.get("/slettAlle", function(){
        $("#billetTabell tbody").empty();


    })
}

function tryCatchTest(input, errorId, errorIkkeInput, pattern, errorUgyldig) {

    try {
        if (!input) {
            throw new Error(errorIkkeInput);

        }
        if (!(input.match(pattern))) {
            throw new Error(errorUgyldig)

        }
        document.getElementById(errorId).innerHTML = "";

        return true;
    } catch (err) {
        document.getElementById(errorId).innerHTML = err.message;

        return false;
    }
}

function sjekkInput() {

    const fornavn = document.getElementById("fornavnInput").value;
    const etternavn = document.getElementById("etternavnInput").value;
    const telefonNr = document.getElementById("tlfInput").value;
    const epost = document.getElementById("epostInput").value;
    const antall = document.getElementById("antallInput").value;

    const fornavnGyldig = tryCatchTest(fornavn, "fornavnError", "Må skrive noe inn i fornavnet", /^\w+$/, "Ugyldig navn");
    const etternavnGyldig = tryCatchTest(etternavn, "etternavnError", "Må skrive noe inn i etternavnet", /^\w+$/, "ugyldig etternavn");
    const telefonNrGyldig = tryCatchTest(telefonNr, "telefonNrError", "Må skrive noe inn i telefonnummeret", /^\d+$/, "ugyldig telefonnummer");
    const epostGyldig = tryCatchTest(epost, "epostError", "Må skrive noe inn e-posten", /^\w+@\w+\.\w{2,6}$/, "ugyldig epost");
    const antallGyldig = tryCatchTest(antall, "antallError", "Må skrive inn antall", /^\d+$/, "ugyldig antall");

    if (fornavnGyldig && etternavnGyldig && telefonNrGyldig && epostGyldig && antallGyldig) {
        let film = document.getElementById("filmValg").value;

        let nyBillett = {film, antall, fornavn, etternavn, telefonNr, epost};
        function hentAlle(){
            $.get("/hentAlle", function(data){
                displayTickets(data)
                //formaterData(data);

            })
        }
        //sender billett-objekt og lagrer på server, og kjører hentalle metoden som displayer dataen i tabell
        $.post("/lagre", nyBillett, function() {
            hentAlle();
        });



        //billettObjekter.push(nyBillett);
        //displayTickets();

        document.getElementById("antallInput").value = "";
        document.getElementById("fornavnInput").value = "";
        document.getElementById("etternavnInput").value = "";
        document.getElementById("tlfInput").value = "";
        document.getElementById("epostInput").value = "";

    }
}

function displayTickets(liste) {

    document.getElementById("billett").innerHTML = "";



    liste.forEach(ticket => {
        let rad = document.createElement("tr");
        rad.innerHTML = `
                <td>${ticket.film}</td>
                <td>${ticket.antall}</td>
                <td>${ticket.fornavn} ${ticket.etternavn}</td>
                <td>${ticket.telefonNr}</td>
                <td>${ticket.epost}</td>
            `;
        document.getElementById("billett").appendChild(rad);
    });
}