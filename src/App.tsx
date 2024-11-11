import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Blog from "../src/pages/blog/Blog.tsx";
import SignIn from "../src/pages/sign-in/SignIn.tsx";
import SignUp from "../src/pages/sign-up/SignUp.tsx";
import Weather from "../src/pages/Weather";


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
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
