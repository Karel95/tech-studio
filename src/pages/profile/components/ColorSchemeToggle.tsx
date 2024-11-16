import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // Detectar la preferencia del sistema al cargar la página
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(systemPrefersDark ? 'dark' : 'light'); // Aseguramos valores válidos
    setMounted(true); // Marcar el componente como montado
  }, [setMode]);

  if (!mounted) {
    // Evitar renderizar antes de montar completamente
    return null;
  }

  const handleModeToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light'); // Alternar entre modos válidos
  };

  return (
    <IconButton
      size="sm"
      variant="outlined"
      color="neutral"
      onClick={(event) => {
        handleModeToggle();
        onClick?.(event); // Llamar a la función onClick si existe
      }}
      {...other}
      sx={[
        mode === 'dark'
          ? { '& > *:first-of-type': { display: 'none' } }
          : { '& > *:first-of-type': { display: 'initial' } },
        mode === 'light'
          ? { '& > *:last-of-type': { display: 'none' } }
          : { '& > *:last-of-type': { display: 'initial' } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRoundedIcon />
      <LightModeIcon />
    </IconButton>
  );
}
