import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Grid, Stack, Typography } from "@mui/material";
import Servizio from "./Servizio";

export default function AreaIntroduzione() {
  return (
    <Stack spacing={2}>
      <Typography>
        Optimus nasce con l’obiettivo di aiutare le imprese ad automatizzare le
        attività ripetitive lungo tutti i processi aziendali. Dalla gestione
        degli ordini e dei magazzini alle attività di reportistica e
        monitoraggio interno, aiutiamo le aziende a trovare le migliori
        soluzioni per digitalizzare e automatizzare le attività, aumentando la
        produttività della forza lavoro. Offrendo sia servizi di consulenza che
        sviluppo software, troviamo soluzioni flessibili per i nostri clienti,
        che si adattano alle metodologie di lavoro e agli applicativi gestionali
        già presenti in casa.
      </Typography>

      <Grid container spacing={2} paddingRight={4}>
        <Grid item xs={12} sm={6}>
          <Servizio titolo="Consulenza Strategica e Tecnica" Icona={SearchIcon}>
            Identifichiamo le aree con potenzialità di automazione, individuiamo
            tecniche e strumenti per automatizzare i processi critici e aiutiamo
            i clienti a sfruttare al meglio gli strumenti che già possiedono.
          </Servizio>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Servizio titolo="Gestione Ordini e Magazzino" Icona={WarehouseIcon}>
            Automatizziamo la gestione di informazioni relative agli ordini di
            acquisto e di vendita, la compilazione di file, il censimento e
            monitoraggio del magazzino e la comunicazione con produzione,
            clienti e fornitori.
          </Servizio>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Servizio titolo="Reportistica" Icona={DescriptionIcon}>
            Automatizziamo le attività di raccolta ed elaborazione di dati e la
            produzione di documenti di reportistica ad uso interno ed esterno,
            nel formato necessario alle specifiche esigenze del cliente.
          </Servizio>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Servizio titolo="Altri Servizi" Icona={CategoryIcon}>
            Forniamo ulteriori servizi propedeutici e complementari
            all’automazione di processi, come la digitalizzazione delle
            informazioni cartacee, la migrazione di informazioni in Cloud e lo
            sviluppo di applicazioni e siti web.
          </Servizio>
        </Grid>
      </Grid>
    </Stack>
  );
}
