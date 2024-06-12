import { Box, Typography } from "@mui/material";
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
                <Box sx={{ height: "100%" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: mainBlack,
                      height: "100%",
                    }}
                  >
                    {/* <Box
                      component="img"
                      src="/logo.png"
                      sx={{ height: "100%" }}
                    /> */}
                    <Typography variant="h4" fontWeight="bold">
                      OPTIMUS
                    </Typography>
                  </Link>
                </Box>
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
