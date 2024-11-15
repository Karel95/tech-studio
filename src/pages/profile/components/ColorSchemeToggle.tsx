import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx } = props;
  const { mode, setMode } = useColorScheme();

  // Cuando se hace clic, alternamos entre light y dark mode
  const handleModeToggle = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <IconButton
      data-screenshot="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      {...props}
      onClick={(event) => {
        handleModeToggle();  // Cambiar el tema
        onClick?.(event);  // Llamar a la función onClick si está definida
      }}
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
