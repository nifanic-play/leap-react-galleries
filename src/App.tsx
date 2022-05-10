import "./App.scss";

import React from "react";

import { createTheme, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";

import { Galleries } from "./components/Galleries";

const App = () => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: { body: { backgroundColor: grey[50] } },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App__header">
          <h1>Leap Test App</h1>
        </header>

        <main className="App__main">
          <h2>Galleries</h2>
          <Galleries />
        </main>

        <footer className="App__footer">
          <p>&copy;2022 Leap Inc.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
