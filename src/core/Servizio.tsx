import { Paper, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type ServizioProps = PropsWithChildren & {
  titolo: string;
};

export default function Servizio({ titolo, children }: ServizioProps) {
  const testo = children;

  return (
    <Paper
      sx={{
        padding: 2,
        //fontSize="larger" del titolo fa si che prenda più spazio di margine
        //quindi riduco il padding dal suo lato
        paddingTop: 1,
        border: 1,
        //TODO: rivalutare
        borderRadius: 2,
        borderColor: "primary.main",
        backgroundColor: "black",
      }}
      elevation={8}
    >
      <Typography color="primary.main" fontWeight="bold" fontSize="larger">
        {titolo}
      </Typography>
      <Typography>{testo}</Typography>
    </Paper>
  );
}
