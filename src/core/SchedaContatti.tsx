import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Paper, Typography } from "@mui/material";
import { mainYellow } from "./colors";
import Contatto from "./Contatto";

export default function SchedaContatti() {
  return (
    <Paper
      elevation={24}
      sx={{
        padding: 3,
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 2,
        backgroundColor: "black",
        width: "100%",
        boxShadow: `0 0 32px ${mainYellow}99`,
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="primary.main">
        Contatti
      </Typography>
      <Contatto
        icona={<AttachEmailIcon fontSize="small" />}
        titolo="Mail"
        link="mailto:optimus.rpa@gmail.com"
        testoLink="optimus.rpa@gmail.com"
        descrizione="E-Mail per OptimusRPA per mettersi in contatto con noi e richiedere i
        nostri servizi"
      />

      <Contatto
        icona={<LinkedInIcon fontSize="small" />}
        titolo="LinkedIn"
        link="https://www.linkedin.com/company/optimus-rpa/posts/?feedView=all"
        testoLink="Optimus RPA"
        descrizione="Seguici su LinkedIn per metterti in contatto con noi e rimanere
        aggiornato sui nostri servizi"
      />

      <Contatto
        icona={<InstagramIcon fontSize="small" />}
        titolo="Instagram"
        link="https://www.instagram.com/optimus_rpa/"
        testoLink="Optimus RPA"
        descrizione="Seguici su Instagram per scoprire i nostri contenuti e le nostre novità"
      />
    </Paper>
  );
}
