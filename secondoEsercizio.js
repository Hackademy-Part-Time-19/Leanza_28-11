

// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// - Mostra tutti i contatti
// - Mostra un singolo contatto
// - Elimina un contatto
// - Aggiungi un contatto
// - Modifica un contatto esistente

let agenda = {
    contatti: [{ nome: "Luca", cognome: "Leanza", numero: "3333333333" }, { nome: "Mario", cognome: "Rossi", numero: "3333333333" }, { nome: "Salvo", cognome: "Bianchi", numero: "3333333333" }],
    mostraContatti: function () {
        console.log(this.contatti);
    },
    mostraUnContatto: function (nome) {
        let contattoFiltrato = this.contatti.filter((contatto) => contatto.nome === nome);
        console.log(contattoFiltrato);
    },
    eliminaContatto: function (nome) {
        for (let i = 0; i < this.contatti.length; i++) {
            if (this.contatti[i].nome === nome) {
                this.contatti.splice(i, 1);
                console.log("contatto eliminato: " + nome)
                console.log(this.contatti);
                return;
            } else {
                console.log("contatto non trovato");
            }
        }
    },
    aggiungiContatto: function (nome, cognome, numero) {
        let nuovoContatto = {
            nome: nome,
            cognome: cognome,
            numero: numero
        }
        this.contatti.push(nuovoContatto);
        console.log(this.contatti);
    },
    modificaContatti: function (datoDaModificare, tipo, NuovoDato) {
        for (let i = 0; i < this.contatti.length; i++) {
            if (tipo === "nome") {
                if (this.contatti[i].nome === datoDaModificare) {
                    this.contatti[i].nome = NuovoDato;
                    console.log(this.contatti);
                    return;
                } else {
                    console.log("nome non trovato");
                }
            } else if (tipo === "cognome") {
                if (this.contatti[i].cognome === datoDaModificare) {
                    this.contatti[i].nome = NuovoDato;
                    console.log(this.contatti);
                    return;
                } else {
                    console.log("cognome non trovato")
                }
            } else if (tipo === "numero") {
                if (this.contatti[i].numero === datoDaModificare) {
                    this.contatti[i].numero = NuovoDato;
                    console.log(this.contatti);
                    return;
                } else {
                    console.log("numero non trovato")
                }
            }
        }
    }
}

// mostra contatti

agenda.mostraContatti();

// mostra un singolo contatto

agenda.mostraUnContatto("Mario");

// elimina un contatto

agenda.eliminaContatto("Luca");

// aggiungi un contatto

agenda.aggiungiContatto("Giorgio", "Neri", "3333333333");

//modifica un contatto esistente

agenda.modificaContatti("Giorgio", "nome", "Piero");






