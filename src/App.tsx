import { Typography } from "@mui/material";
import { OptimusUiApp } from "optimus-bo-ui";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { mainBlack, mainYellow } from "./core/colors";
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
            };
          },
        }}
        layoutConfiguration={{
          configure: true,
          layoutConfig: {
            layoutType: "default",
            navbarConfig: {
              navbarStyling: "solid",
              header: (
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: mainBlack }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    Optimus
                  </Typography>
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
