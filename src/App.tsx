import { Box, Stack, Typography } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { mainBlack, mainYellow } from "./core/colors";
import "./fonts.css";
import HomePage from "./pagine/HomePage";

function App() {
  return (
    <BrowserRouter>
      <OptimusUiApp
        muiConfiguration={{
          configure: true,
          makeTheme: () => {
            return {
              palette: {
                mode: "dark",
                primary: {
                  main: mainYellow,
                },
              },
              typography: {
                fontFamily: "ApfelGrotezk",
              },
            };
          },
        }}
        layoutConfiguration={{
          configure: true,
          layoutConfig: {
            layoutType: "default",
            navbarConfig: {
              enableDrawer: false,
              navbarStyling: "solid",
              header: (
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: mainBlack,
                    height: "100%",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      component="img"
                      src="/logo.png"
                      sx={{ height: "3em" }}
                    />
                    <Typography variant="h4" fontWeight="bold">
                      OPTIMUS
                    </Typography>
                  </Stack>
                </Link>
              ),
            },
          },
        }}
        reactQueryConfiguration={{ configure: true }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </OptimusUiApp>
    </BrowserRouter>
  );
}

export default App;
