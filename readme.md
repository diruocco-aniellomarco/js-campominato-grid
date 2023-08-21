 **Consegna**

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


**Svolgimento :**
- creo un bottone e lo identifico con un id
- creo un div per creare la griglia e lo identifico con un id
    - alla griglia darò larghezza fissa 

- collego il bottone e la griglia a javascript
- creo una cella per 100 volte:
    - farò un ciclo che creerà una singola cella 100 volte
        - creo un div dentro la griglia
        - nel div inserisco il numero corrispondente al ciclo
        - do al div una classe che la strutturerà nella forma 
        - farò in modo che se clicco sulla cella:
            - si aggiunga una classe che faccia diventare la cella azzurra 
            - venga emesso un messaggio in console con il numero della cella cliccata.


**Bonus Svolgimento:**
- creo una select per selezionare il livello e gli do un id.
- mi prendo il valore su javascript tramite l'id della select

- se quando clicclo il pulsante: 

        - la select ha valore 0 (nessun livello selezionato):
            - allora faccio uscire un messaggio di allerta e non faccio iniziare il ciclo della creazione delle celle.

        - la select ha valore 1 (livello facile):
            - allora dirò che il numero totali di celle saranno 100 e quando genero le celle aggiungero la classe cell10 per avere 10 celle per rigo

        - la select ha valore 2 (livello Medio):
            - allora dirò che il numero totali di celle saranno 81 e quando genero le celle aggiungero la classe cell9 per avere 9 celle per rigo

        - la select ha valore 3 (livello Difficile):
            - allora dirò che il numero totali di celle saranno 49 e quando genero le celle aggiungero la classe cell7 per avere 7 celle per rigo