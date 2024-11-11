import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Blog from "../src/pages/blog/Blog.tsx";
import Checkout from "../src/pages/checkout/Checkout.tsx";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "../src/pages/sign-in/SignIn.tsx";
import SignUp from "../src/pages/sign-up/SignUp.tsx";
import MarketingPage from "./pages/marketing-page/MarketingPage.tsx";


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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketing-page" element={<MarketingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
