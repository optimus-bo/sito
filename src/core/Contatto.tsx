import { Link, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type ContattoProps = {
  icona: ReactNode;
  titolo: string;
  link: string;
  testoLink: string;
  descrizione: string;
};

export default function Contatto({
  icona,
  link,
  testoLink,
  titolo,
  descrizione,
}: ContattoProps) {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        alignContent="center"
        spacing={1}
        marginTop={3}
      >
        {icona}
        <Typography fontSize="large" fontWeight="bold">
          {titolo}: <Link href={link}>{testoLink}</Link>
        </Typography>
      </Stack>
      <Typography variant="subtitle2" marginLeft={4}>
        {descrizione}
      </Typography>
    </>
  );
}
