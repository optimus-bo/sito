import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, Paper, Stack, Typography } from "@mui/material";
import { mainYellow } from "./colors";

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
      <Stack
        direction="row"
        alignItems="center"
        alignContent="center"
        spacing={1}
        marginTop={3}
      >
        <AttachEmailIcon fontSize="small" />
        <Typography fontSize="large" fontWeight="bold">
          Mail:{" "}
          <Link href="mailto:optimus.rpa@gmail.com">optimus.rpa@gmail.com</Link>
        </Typography>
      </Stack>
      <Typography variant="subtitle2" marginLeft={4}>
        E-Mail per OptimusRPA per mettersi in contatto con noi e richiedere i
        nostri servizi
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} marginTop={3}>
        <LinkedInIcon fontSize="small" />
        <Typography fontSize="large" fontWeight="bold">
          LinkedIn:{" "}
          <Link href="https://www.linkedin.com/company/optimus-rpa/posts/?feedView=all">
            Optimus RPA
          </Link>
        </Typography>
      </Stack>
      <Typography variant="subtitle2" marginLeft={4}>
        Seguici su LinkedIn per metterti in contatto con noi e rimanere
        aggiornato sui nostri servizi
      </Typography>
    </Paper>
  );
}
