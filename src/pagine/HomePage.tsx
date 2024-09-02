import { Stack } from "@mui/material";
import AreaIntroduzione from "../core/AreaIntroduzione";
import SchedaContatti from "../core/SchedaContatti";

export default function HomePage() {
  return (
    <Stack
      padding={2}
      spacing={4}
      sx={{
        maxWidth: 1000,
      }}
    >
      <AreaIntroduzione />
      <SchedaContatti />
    </Stack>
  );
}
