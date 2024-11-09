import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import { useEffect, useState } from "react";
// import ResponsiveAppBar from "./components/header";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  // Auto-theme detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Detecta el tema al cargar la app
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    // Escucha cambios en las preferencias del sistema
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Dashboard />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
