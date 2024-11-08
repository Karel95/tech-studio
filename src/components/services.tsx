import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// Definimos el tipo para la función que se pasa al Hijo
type ServiceInfo = {
  serviceDescription: string;
  servicePrice: number;
  serviceImg: string;
  add: boolean;
};

type ServiceProps = {
  serviceInfo: ServiceInfo;
  children: React.ReactNode; // Añadimos este nuevo prop para mostrar contenido en el CardContent.
  // Este prop es opcional y puede ser omitido si no se quiere mostrar nada dentro del CardContent.
  // Para más información, consulta la documentación de React.FC: https://reactjs.org/docs/react-api.html#reactfc
};

export const Services: React.FC<ServiceProps> = ({ serviceInfo, children }) => {
  //funcionamiento del boton Add
  const [added, setAdded] = useState(serviceInfo.add)
  const text = added ? "Added" : "Add";
  const serviceClassName = added ? "btn-added" : "btn-add";
  const serviceAddedVariant = added ? "outlined" : "contained";
  const handleClickAdd = () => {
    setAdded(!added);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.2",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="service image"
          width="200"
          height="200"
          image={serviceInfo.serviceImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {children}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {serviceInfo.serviceDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={serviceClassName} variant={serviceAddedVariant} size="small" onClick={handleClickAdd}>
          <span className="btn-addText">{text}</span>
          <span className="btn-quitar">Quitar</span>
        </Button>
        <Button color="error" size="small">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
