import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";




const muiTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0,133,147,1)",
      light: "rgba(25,169,189,1)",
      dark: "rgba(23,64,85,1)",
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
 </BrowserRouter>
);


reportWebVitals();
