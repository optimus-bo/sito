import { Paper, Stack, SvgIconProps, Typography } from "@mui/material";
import { ComponentType, PropsWithChildren } from "react";

type ServizioProps = PropsWithChildren & {
  titolo: string;
  Icona: ComponentType<SvgIconProps>;
};

export default function Servizio({ titolo, children, Icona }: ServizioProps) {
  const testo = children;

  return (
    <Paper
      sx={{
        padding: 2,
        //quindi riduco il padding dal suo lato
        paddingTop: 1,
        border: 1,
        //TODO: rivalutare
        borderRadius: 2,
        borderColor: "primary.main",
        backgroundColor: "black",
        height: "100%",
      }}
      elevation={8}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {<Icona color="primary" />}
        <Typography color="primary.main" fontWeight="bold" fontSize="larger">
          {titolo}
        </Typography>
      </Stack>

      <Typography>{testo}</Typography>
    </Paper>
  );
}
