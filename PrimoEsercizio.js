// crea un oggetto, contenente un metodo che permetta di salutare.

let persona = {
    nome: "Luca",
    cognome: "Leanza",
    età: 25,
    saluta : function () {
        console.log("Ciao " + this.nome + "!");
    }
};

persona.saluta();




