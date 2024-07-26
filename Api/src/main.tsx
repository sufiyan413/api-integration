import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarProvider } from "notistack"; // Import SnackbarProvider
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CssBaseline />
    <SnackbarProvider maxSnack={3}
                    anchorOrigin={{
                    vertical: 'top', 
                    horizontal: 'right', 
                    }}
                    >
      <App />
    </SnackbarProvider>
  </>
);
