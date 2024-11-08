import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

// console.log(import.meta.env.VITE_API_KEY)

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

const Weather = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  // Form onSubmit event handler
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);
    try {
      if (!city.trim()) throw { message: "Required!" };
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      if (data.error) throw { message: data.error.message };
      setWeatherData({
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.code,
        icon: data.current.condition.icon,
        conditionText: data.current.condition.text,
      });
    } catch (error) {
      const er = error as Error;
      setError({
        error: true,
        message: er.message,
      });
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: "64px", // 64px cada barra
        }}
      >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Weather
        </Typography>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="city"
            label="City"
            type="text"
            variant="standard"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Submitting..."
          >
            Get Weather
          </LoadingButton>
        </Box>
        {weatherData.city && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              {weatherData.city}, {weatherData.country}
            </Typography>
            <Box component='img' src={weatherData.icon} alt={weatherData.conditionText} sx={{margin: '0 auto'}} />
            <Typography variant="h5" component="h3" align="center" gutterBottom>
              {weatherData.temp} 'C
            </Typography>
            <Typography variant="h6" component="h4" align="center" gutterBottom>
              {weatherData.conditionText}
            </Typography>
          </Box>
        )}
        
        <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </Typography>
      </Container>
    </>
  );
};

export default Weather;
