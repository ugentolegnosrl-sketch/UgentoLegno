/* ============================================================
   FOTO DEL SITO — È L'UNICO FILE DA MODIFICARE PER LE IMMAGINI
   ============================================================
   COME SI USA (non serve toccare l'HTML):
   • CAMBIARE una foto  -> sostituisci l'indirizzo (URL) tra virgolette.
   • AGGIUNGERE una foto -> aggiungi una nuova riga con l'URL (ricordati la virgola).
   • TOGLIERE una foto   -> cancella la riga della foto.

   • Le foto del CATALOGO scorrono in CAROSELLO: l'ordine qui sotto
     è l'ordine in cui appaiono. Se un elenco è vuoto [ ], quella
     categoria mostra il riquadro illustrato (nessuna foto).

   • Puoi usare foto TUE (prima caricale sul sito, nella stessa
     cartella, es. "img/profilo1.jpg" e qui scrivi "img/profilo1.jpg")
     oppure link a foto libere (es. da pexels.com).

   Dopo aver salvato questo file, ricarica la pagina: è tutto.
   ============================================================ */

window.FOTO = {

  /* Sfondo grande della HOME */
  hero: [
    "https://images.pexels.com/photos/1787035/pexels-photo-1787035.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ],

  /* Caroselli del CATALOGO — una lista per ogni categoria */
  catalogo: {

    massello: [
      "https://images.pexels.com/photos/1787035/pexels-photo-1787035.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=1000"
    ],

    pannelli: [
      "https://images.pexels.com/photos/7479035/pexels-photo-7479035.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/168442/pexels-photo-168442.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1000"
    ],

    strutturale: [
      "https://images.pexels.com/photos/159375/pexels-photo-159375.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg?auto=compress&cs=tinysrgb&w=1000"
    ],

    profili: [
      "https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/139325/pexels-photo-139325.jpeg?auto=compress&cs=tinysrgb&w=1000"
    ],

    pavimenti: [
      "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/172291/pexels-photo-172291.jpeg?auto=compress&cs=tinysrgb&w=1000",
      "https://images.pexels.com/photos/172292/pexels-photo-172292.jpeg?auto=compress&cs=tinysrgb&w=1000"
    ],

    /* LATTONERIA: nessuna foto per ora (mostra il riquadro illustrato).
       Aggiungi qui i tuoi URL e diventerà automaticamente un carosello. */
    lattoneria: [
    ]

  },

  /* Foto della pagina SERVIZI */
  servizi: {
    taglio:   [ "sezionatrice.png" ],
    consegna: [ "https://images.pexels.com/photos/13520550/pexels-photo-13520550.jpeg?auto=compress&cs=tinysrgb&w=1000" ]
  }

};
